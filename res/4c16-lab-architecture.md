# The 4C16 Cloud Lab & Autograding Platform: Architecture, History & Open Challenges

**Dr. François Pitié, Dr. Hugh Denman, Dr. Vibhoothi**  
*Department of Electronic & Electrical Engineering, Trinity College Dublin*  
*Online Platform: [4c16.dev](https://4c16.dev/) | Public Course Portal: [frcs.github.io/4c16/](https://frcs.github.io/4c16/)*

---

## 1. Vision: Why Build a Custom Autograding Cloud?

When we launched **EEU44C16 / EE5C16 (Deep Learning and its Applications)** in 2017—Ireland's first undergraduate deep learning module—we encountered three fundamental pedagogical and operational bottlenecks:

1. **The Hardware Divide:** Training deep neural networks demands GPU hardware that students rarely possess on personal laptops. Relying on local workstations creates severe inequity and endless software compatibility headaches (CUDA driver mismatches, OS dependencies).
2. **The "Cookbook Lab" Trap:** Traditional university labs often resemble prescriptive recipes: follow steps A, B, and C to receive a grade. This breeds passive compliance rather than genuine engineering intuition.
3. **The Scale & Assessment Bottleneck:** To teach advanced machine learning effectively to cohorts of 150+ students, grading cannot be a subjective, weeks-late exercise. Students need **immediate programmatic feedback** so they can iterate, debug, and learn from mistakes in real time.

Our core thesis was simple: **trade time for mastery**. If we could engineer an infrastructure that verifies baseline code functionality instantly, students could undertake **open-ended, competitive machine learning challenges** on uncurated, real-world datasets. Students would be free to submit dozens of iterations, test creative architectures, and learn genuine software engineering discipline (Git version control, unit testing, continuous integration) without computing bottlenecks.

Because no commercial or off-the-shelf university system offered this integration, we built our own.

---

## 2. System Evolution: Three Generations of Infrastructure

The platform has evolved across three major architectural generations, balancing scalability, operational maintenance, and student experience.

```
Generation 1 (2017-2020)              Generation 2 (2021-2024)              Generation 3 (2025-Present)
   [GCP Virtual Cluster]                 [Colab + Gitolite Hybrid]              [Modernized Containerized Stack]
  * Gitolite over SSH                   * Google Colab GPU runtimes           * Caddy Reverse Proxy (Auto-TLS)
  * Ruby on Rails 5.1                   * Trinity Google Drive storage        * Forgejo (Git + OAuth2 SSO)
  * Synchronous Git post-receive        * Custom git workflow notebooks       * FastAPI (Python 3.12) Portal
  * ~10k EUR Google Cloud Grants        * Decoupled student compute           * PostgreSQL 16 Job Queue
                                                                              * Async Containerized Workers
```

### Generation 1 (2017-2020): GCP, Gitolite, and Synchronous Shell Hooks
- **Architecture:** Hosted entirely on Google Cloud Platform (GCP) compute instances, supported by **~10,000 EUR in Google Cloud Platform educational grants**.
- **Mechanics:** Relied on **Gitolite** over SSH to manage individual student repositories, backed by a Ruby on Rails 5.1 application and PostgreSQL 9.6.
- **Grading Mechanism:** Used synchronous `post-receive` Git hooks. When a student ran `git push`, the hook intercepted the commit, initiated an assessment shell script in an isolated runtime, ran automated test suites, and printed the grading output directly into the student's terminal before the push command exited.
- **Lessons Learned:** While groundbreaking, synchronous execution meant git pushes blocked during deadline peaks, creating queue delays. Maintaining custom GCP clusters also imposed substantial system administration overhead on a small academic team.

### Generation 2 (2021-2024): The Hybrid Colab & Git Workflow
- **Decoupling Compute:** To ensure sustainable zero-cost compute for students, interactive model training was migrated to **Google Colab** GPU instances, with persistence anchored in students' Trinity Google Drive accounts.
- **Bridging the Terminal Gap:** Because Colab's free tier lacked an interactive web terminal, we created a custom client-side orchestration notebook (`4c16-git-workflow.ipynb`). This notebook executed Git clone, commit, pull, and push commands via the Colab Python kernel, seamlessly synchronising local Drive storage with the remote server.
- **Impact:** Solved the hardware inequality problem entirely, allowing classes to scale from 70 to over 150 students across multiple degree streams.

### Generation 3 (2025-Present): The Modernized, Enterprise-Grade Architecture
In 2025/26, the backend was completely re-architected from first principles. Built by **Dr. Hugh Denman** (ex-Google engineer) and maintained with **Dr. Vibhoothi**, the platform was modernised into a unified, high-performance, containerised stack governed by one fundamental rule: **every component must justify its existence and be maintainable by a single operator with minimal friction.**

```
+-----------------------------------------------------------------------------------+
|                                 STUDENT WORKSPACE                                 |
|   Google Colab (Browser GPU)  <--->  Trinity Google Drive (Code & Artifacts)      |
|                      ^                                                            |
|                      | Git Push over SSH (Port 2222)                              |
+----------------------|------------------------------------------------------------+
                       v
+-----------------------------------------------------------------------------------+
|                             4C16.DEV CLOUD PLATFORM                               |
|                                                                                   |
|  [ CADDY REVERSE PROXY ] (Port 80/443, Automatic Let's Encrypt TLS)               |
|         |                                           |                             |
|         | /git/*                                    | /*                          |
|         v                                           v                             |
|  [ FORGEJO GIT ENGINE ]                      [ FASTAPI PORTAL ]                   |
|   * SSH Git Server (Port 2222)                * Student Dashboards                |
|   * OAuth2 Single Sign-On Provider            * Admin Management & Analytics      |
|   * Automated Webhook on Push                 * Plagiarism Detection Engine       |
|         |                                           |                             |
|         +-------------------+   +-------------------+                             |
|                             |   |                                                 |
|                             v   v                                                 |
|                   [ POSTGRESQL 16 DATABASE ]                                      |
|                    * Relational Data Store                                        |
|                    * Atomic Polling Job Queue (grading_jobs table)                |
|                             ^                                                     |
|                             | Atomic Claim & Score Writeback                      |
|                             v                                                     |
|                 [ ASYNC GRADING WORKER DAEMON ]                                   |
|                  1. Polls queue every 2 seconds                                   |
|                  2. Clones student repo via internal URL                          |
|                  3. Executes assess-lab test suites in Docker                     |
|                  4. Evaluates PyTorch models on hold-out test sets                |
|                  5. Writes results & scores; updates dashboard                    |
+-----------------------------------------------------------------------------------+
```

---

## 3. Detailed Component Architecture

### 1. Reverse Proxy: Caddy
Acts as the single front door to the entire platform. Caddy automatically provisions and renews SSL/TLS certificates and cleanly multiplexes traffic:
- Routes `/git/*` to Forgejo (port 3000)
- Routes all general web traffic `/*` to the FastAPI application (port 8000)

### 2. Version Control & Identity: Forgejo
Rather than heavy proprietary services, we deploy **Forgejo** (a lightweight, community-driven Gitea fork):
- Hosts an isolated private Git repository for each enrolled student (`{academic_year}/{username}-code`).
- Serves as the **OAuth2 Identity Provider**: students and instructors log into the portal via Forgejo single sign-on.
- Automatically fires a webhook to the FastAPI API endpoint (`/api/hooks/push`) whenever a student pushes new commits.

### 3. Application Portal & API: FastAPI
Built with **Python 3.12**, FastAPI delivers high performance, native async support, and zero JavaScript compilation overhead (using Jinja2 templates and Pico CSS):
- **Student Dashboard:** Real-time visibility into assessment results, test pass/fail breakdowns, submission history, and live class challenge leaderboards.
- **Admin Panel:** Real-time module management, student enrollment synchronisation, grading job telemetry, CSV grade export, and automated plagiarism audits based on git commit history and blob hashing.

### 4. Database & Atomic Queue: PostgreSQL 16
To eliminate unnecessary dependencies, we discarded external brokers like Redis or RabbitMQ. PostgreSQL serves dual duty:
- **Persistent Relational Store:** Tracks users, modules, enrollments, and granular lab test results.
- **Atomic Job Queue:** When a webhook arrives, a row is inserted into `grading_jobs` with status `pending`. Worker processes claim jobs using atomic `SELECT FOR UPDATE SKIP LOCKED` state updates, guaranteeing zero race conditions and zero duplicate grading.

### 5. Automated Grading Worker
A dedicated background worker daemon polls the database job queue every 2 seconds:
1. Claims the pending job and sets status to `running`.
2. Clones the student's repository over an internal network link.
3. Spawns an isolated execution environment running the lab-specific test suite (`assess-lab` + `tcd_test.py`).
4. Executes unit tests on neural architectures, validates tensor shapes, and computes model performance on unseen validation/test datasets.
5. Writes the resulting score breakdown back to the `assessments` table and marks the job `done`.
6. The student refreshes their dashboard and immediately inspects their results.

---

## 4. The Pedagogical Payoff: Enabling Open-Ended Challenges

The architectural sophistication of this platform is not an end in itself—it exists to make ambitious pedagogy possible:

- **Immediate Feedback Loop:** Students receive programmatic validation within seconds of pushing code. Syntax errors and dimension mismatches are resolved immediately, without waiting for weekly lab sessions.
- **Authentic Engineering Hygiene:** Students work with industry-standard tooling—Git, SSH keys, remote repositories, unit testing, and PyTorch—rather than isolated web playgrounds.
- **Open-Ended Challenges:** In advanced labs, students participate in competitive miniprojects (e.g. image classification, natural language processing, semantic segmentation). Given uncurated datasets, students formulate hypotheses, experiment with network architectures, and push beyond baseline specifications.
- **Platform Telemetry:** Telemetry reveals that cohorts routinely submit dozens of iterations voluntarily, driven by intrinsic curiosity and leaderboard engagement.
- **Shifting Lecturers to Coaches:** Because baseline code grading is automated, teaching assistants and faculty do not spend hours marking syntax. Instead, contact hours are spent on **continuous oral vivas**, where students verbally articulate their design decisions, discuss trade-offs, and defend their code.

---

## 5. Resourcing Contrast & Sustainability

In many university faculties (such as Computer Science), dedicated full-time technicians are employed solely to maintain off-the-shelf Git hosting and laboratory servers.

In contrast, the 4C16 lab system was **conceived, architected, and deployed in-house by our own academic and research staff**. The entire production stack runs as 5 Docker containers orchestrated via `docker compose up` on a single host. It requires zero commercial licensing fees, eliminates external dependency bottlenecks, and scales effortlessly to hundreds of students every semester.

This unique infrastructure was a cornerstone in receiving the **2026 University Excellence in Teaching Award** and the **2026 Inspired Educator Award** at Trinity College Dublin, demonstrating how purposeful software engineering can fundamentally elevate university education.
