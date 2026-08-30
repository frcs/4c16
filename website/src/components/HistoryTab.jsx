import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { labSystemContent } from '../data/content';

export default function HistoryTab() {
  return (
    <article className="max-w-2xl mx-auto py-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-gray-700 leading-relaxed font-normal">
      
      {/* Sub-Navigation Toggle between Student Guide and History */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-8">
        <Link 
          to="/lab-system" 
          className="inline-flex items-center text-xs sm:text-sm font-medium text-tcd-blue hover:text-tcd-blue-dark transition-colors"
        >
          <ArrowLeft size={15} className="mr-1" />
          Student Guide
        </Link>

        <div className="inline-flex rounded-lg bg-gray-100 p-0.5 text-xs font-medium">
          <Link
            to="/lab-system"
            className="px-2.5 py-1 rounded text-gray-600 hover:text-gray-900 transition-colors"
          >
            Guide
          </Link>
          <span className="px-2.5 py-1 rounded bg-white text-gray-900 shadow-xs font-semibold">
            History
          </span>
        </div>
      </div>

      {/* Article Header */}
      <header className="mb-8 pb-5 border-b border-gray-200">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight mb-2">
          The 4C16 Cloud Lab & Autograding Platform
        </h1>

        <div className="text-xs sm:text-sm text-gray-600 space-y-0.5">
          <p className="font-medium text-gray-800">
            Dr. François Pitié, Dr. Vibhoothi, Dr. Hugh Denman
          </p>
          <p className="text-gray-500">
            Department of Electronic & Electrical Engineering, Trinity College Dublin
          </p>
        </div>
      </header>

      {/* Section 1: Background & Origins */}
      <section className="mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 tracking-tight">
          1. Background & Origins
        </h2>
        
        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          When we launched <strong>EEU44C16 / EE5C16 (Deep Learning and its Applications)</strong> in 2017 as Ireland's first undergraduate deep learning module, we ran into three practical problems.
        </p>

        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          First, training deep networks requires GPUs that students rarely have on their personal laptops. Relying on physical lab workstations or asking students to install drivers locally always leads to a tangle of CUDA and OS compatibility issues. Equipping dedicated university labs would also have required purchasing over a hundred high-end GPU cards, and renewing them every two years as hardware requirements advanced.
        </p>

        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          Second, we wanted students to work on real, uncurated datasets where they could experiment with different network architectures, tune hyperparameters, and learn from things that fail on the first attempt.
        </p>

        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          Third, with classes of over 150 students, assessment cannot take weeks. If someone has a simple syntax bug or a tensor shape mismatch, they need to know right away so they can fix it and keep making progress.
        </p>

        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          The idea was to trade time for mastery. As promoted by{' '}
          <a 
            href="https://www.youtube.com/watch?v=-MTRxRO5SRA" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-tcd-blue font-medium hover:underline"
          >
            Sal Khan
          </a>
          , mastery learning means giving students the time and freedom to practice until they truly grasp a concept before moving forward. By having an automated system verify baseline code immediately, students can submit dozens of iterations, explore ambitious models, and pick up real software engineering habits (<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">Git</a>, unit testing, CI) along the way.
        </p>

        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          At the time, no existing tool quite matched what we needed, so we built our own. We have continually looked at off-the-shelf alternatives since, but nothing has come close enough. GitHub Classroom came closest, but its setup made the unit tests visible to students, and GitHub has since announced its deprecation. Even today, our custom self-hosted platform remains uniquely tailored to the way we teach.
        </p>
      </section>

      {/* Section 2: Three Generations */}
      <section className="mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 tracking-tight">
          2. Three Generations of Infrastructure
        </h2>

        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          The platform has gone through three main iterations over the past eight years.
        </p>

        {/* Responsive 3 Generations Timeline */}
        <div className="my-6 border-l border-slate-300 pl-4 space-y-4">
          <div>
            <div className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider">
              Generation 1 (2017-2020) • Architect: Dr. Hugh Denman
            </div>
            <div className="font-semibold text-gray-900 text-sm mt-0.5">
              GCP Virtual Cluster & Synchronous Shell Hooks
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              <a href="https://gitolite.com/gitolite/" target="_blank" rel="noopener noreferrer" className="hover:underline text-tcd-blue">Gitolite</a> over SSH • <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" className="hover:underline text-tcd-blue">Ruby on Rails 5.1</a> • <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="hover:underline text-tcd-blue">PostgreSQL 9.6</a> • Synchronous post-receive hooks • ~€10k <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-tcd-blue">GCP</a> Grants
            </p>
          </div>

          <div>
            <div className="text-[11px] font-mono font-medium text-tcd-blue uppercase tracking-wider">
              Generation 2 (2021-2025) • Architect: Dr. Vibhoothi
            </div>
            <div className="font-semibold text-gray-900 text-sm mt-0.5">
              Colab GPU Compute, Google Drive & Caddy HTTPS
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              <a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-tcd-blue">Google Colab</a> GPUs • Trinity Google Drive storage • Git workflow notebook • Gitolite & Rails backend • <a href="https://caddyserver.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-tcd-blue">Caddy</a> for HTTPS
            </p>
          </div>

          <div>
            <div className="text-[11px] font-mono font-medium text-slate-700 uppercase tracking-wider">
              Generation 3 (2026-Present) • Architect: Dr. Vibhoothi (Major Upgrade)
            </div>
            <div className="font-semibold text-gray-900 text-sm mt-0.5">
              Containerized Stack on 4c16.dev
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              <a href="https://forgejo.org/" target="_blank" rel="noopener noreferrer" className="hover:underline text-tcd-blue">Forgejo</a> Git • <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-tcd-blue">FastAPI</a> • <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="hover:underline text-tcd-blue">PostgreSQL 16</a> Queue • <a href="https://caddyserver.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-tcd-blue">Caddy</a> • <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-tcd-blue">Docker</a> Autograding Sandboxes
            </p>
          </div>
        </div>

        <h3 className="text-base font-semibold text-gray-900 mt-6 mb-2">
          Generation 1 (2017-2020): GCP and Synchronous Shell Hooks
        </h3>
        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          In 2017, Hugh Denman (then recently back from Google) built the first version on <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">Google Cloud Platform</a>, funded by ~€10,000 in GCP educational grants. It used <a href="https://gitolite.com/gitolite/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">Gitolite</a> over SSH for student repositories, backed by a <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">Ruby on Rails</a> application and <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">PostgreSQL</a>. Students interacted directly through a browser-based terminal and file editor, avoiding any local machine setup.
        </p>
        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          Grading was synchronous: when a student ran <code className="text-xs bg-slate-100 text-slate-700 px-1 py-0.5 rounded font-mono border border-slate-200">git push</code>, a <code className="text-xs bg-slate-100 text-slate-700 px-1 py-0.5 rounded font-mono border border-slate-200">post-receive</code> hook intercepted the commit, ran an assessment script in an isolated runtime, and printed the test results right back to the student's terminal before the push exited.
        </p>
        <p className="text-[15px] sm:text-base leading-7 mb-4">
          This initial architecture served us remarkably well, running largely unchanged for four years.
        </p>

        <h3 className="text-base font-semibold text-gray-900 mt-6 mb-2">
          Generation 2 (2021-2025): Moving to Colab, Google Drive, and Caddy
        </h3>
        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          While synchronous hooks worked well for small cohorts, they had real limits. Right before deadlines, simultaneous pushes queued up and led to timeouts. At the same time, managing custom GCP virtual machines was taking too much sysadmin effort for a small academic team, and cloud grant funding was not a permanent solution.
        </p>
        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          Around that time, Google had recently rolled out <a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">Google Colab</a>. Beyond eliminating server hosting bills, we saw this as a great educational opportunity: working with Colab gave students hands-on experience with an accessible, industry-standard cloud tool that they could continue using in their own research, final-year projects, and careers after graduation. Vibhoothi, who had recently joined our research group after contributing to <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">VideoLAN</a>, redesigned the lab workflow around Colab GPU runtimes, pairing them with students' institutional Trinity Google Drive accounts for persistent storage.
        </p>
        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          The backend at this stage still relied on Gitolite over SSH, Ruby on Rails 5.1, PostgreSQL 9.6, and synchronous <code className="text-xs bg-slate-100 text-slate-700 px-1 py-0.5 rounded font-mono border border-slate-200">post-receive</code> hooks, with <a href="https://caddyserver.com/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">Caddy</a> introduced to handle automatic HTTPS / TLS encryption.
        </p>
        <p className="text-[15px] sm:text-base leading-7 mb-4">
          Because free Colab instances don't have an interactive terminal, Vibhoothi wrote a helper notebook (<code className="text-xs bg-slate-100 text-slate-700 px-1 py-0.5 rounded font-mono border border-slate-200">4c16-git-workflow.ipynb</code>) that runs Git commands (clone, commit, push) directly through the Python kernel to sync Drive storage with the server. This solved the hardware barrier completely and allowed the class to expand from 70 to over 150 students across multiple degree streams without needing a dedicated on-campus GPU cluster.
        </p>

        <h3 className="text-base font-semibold text-gray-900 mt-6 mb-2">
          Generation 3 (2026-Present): Platform Overhaul on 4c16.dev
        </h3>
        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          While the platform was already containerized and running at <a href="https://4c16.dev" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">4c16.dev</a>, day-to-day administration still required a fair amount of complex command-line operations, from manually provisioning repositories to troubleshooting jobs. With deep learning expanding into a new third-year undergraduate module in 2027/28, student numbers are set to grow substantially, making manual maintenance unsustainable.
        </p>
        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          In 2026, Vibhoothi led a major overhaul of the platform to prepare for this expansion. The goal was to make operating the system day-to-day significantly simpler, replacing fragile command-line steps with an automated web portal while ensuring the architecture scales smoothly across multiple cohorts and modules.
        </p>
        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          The current system runs as 5 <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">Docker</a> containers on a single host, keeping the workflow clean and reliable:
        </p>

        {/* Refined Light-Theme Architecture Diagram */}
        <pre className="bg-slate-50 border border-slate-200 text-slate-700 p-3.5 sm:p-4 rounded-lg font-mono text-[11px] sm:text-xs overflow-x-auto my-5 leading-relaxed shadow-xs">
{`  Student Workspace (Colab GPU + Trinity Google Drive)
        |
        | Git push over SSH
        v
  [ Caddy Web Proxy ] (Automatic SSL / HTTPS)
        |                                        |
        | Git Connections                        | Portal Traffic
        v                                        v
  [ Forgejo Git Engine ]                  [ FastAPI Web Portal ]
  * Student Git Repositories              * Student Dashboards & Leaderboard
  * Trinity Single Sign-On                * Progress & Submission History
  * Triggers evaluation on push           * Instructor Course Management
        |                                        |
        +-------------------+  +-----------------+
                            |  |
                            v  v
                 [ PostgreSQL Database ]
                 * Course Data & Results
                 * Background Job Queue
                            ^
                            | Pulls jobs & writes scores
                            v
               [ Docker Grading Worker ]
               * Sandboxed automated test execution
               * PyTorch hold-out set evaluation (<10s)`}
        </pre>

        <div className="space-y-3.5 text-[15px] sm:text-base leading-7 mt-4">
          <p>
            At the edge, <a href="https://caddyserver.com/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-semibold hover:underline">Caddy</a> acts as the front door, handling secure HTTPS connections and automatic SSL certificates, cleanly routing Git operations to Forgejo and web traffic to the student portal.
          </p>
          <p>
            For version control and user accounts, we use <a href="https://forgejo.org/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-semibold hover:underline">Forgejo</a> (a lightweight Git server). It hosts each student's private code repository, supports Single Sign-On with Trinity accounts, and automatically notifies the backend whenever new code is pushed.
          </p>
          <p>
            The web portal is built with <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-semibold hover:underline">FastAPI</a> in Python. It gives students their submission history, test results, and live class leaderboards, while giving instructors straightforward tools to manage enrollments and review submissions.
          </p>
          <p>
            Rather than adding separate queuing software like Redis or RabbitMQ, we use <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-semibold hover:underline">PostgreSQL</a> for both data storage and the job queue. When a student pushes code, an evaluation job is queued directly in the database, where grading workers pick it up safely without needing extra server infrastructure.
          </p>
          <p>
            A background grading worker continuously monitors the queue. When a job arrives, it pulls the student's code and runs the test suite (<code className="text-xs bg-slate-100 text-slate-700 px-1 py-0.5 rounded font-mono border border-slate-200">assess-lab</code> and <code className="text-xs bg-slate-100 text-slate-700 px-1 py-0.5 rounded font-mono border border-slate-200">tcd_test.py</code>) inside an isolated <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-semibold hover:underline">Docker</a> container. The worker checks layer shapes, validates model definitions, and benchmarks trained <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-semibold hover:underline">PyTorch</a> models against an unseen test set. Results are saved directly back to the database, so students see their scores on the dashboard in under ten seconds.
          </p>
        </div>
      </section>

      {/* Section 3: Teaching with the System */}
      <section className="mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 tracking-tight">
          3. How It Changes the Teaching
        </h2>

        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          By providing immediate feedback, students catch syntax errors, shape mismatches, and bugs right away, rather than waiting days for a lab session. This lets them focus on real machine learning problems and get used to professional tools: <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">Git</a>, SSH keys, unit testing, and <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">PyTorch</a>.
        </p>

        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          It also makes open-ended challenges feasible. For advanced labs, students work on uncurated datasets, such as image classification, natural language processing, and semantic segmentation, and compete on a class leaderboard. Because they can test changes quickly, students voluntarily submit dozens of iterations to try out different ideas.
        </p>

        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          Crucially, automating baseline checks changes what happens in the lab room. Teaching assistants and lecturers don't spend contact hours marking syntax or running test scripts. Instead, lab time is spent on continuous oral vivas: demonstrators sit down with students to discuss architectural choices, training trade-offs, regularization, and theoretical concepts. Passing the automated test suite is only the baseline; the viva confirms that the student understands why their model works.
        </p>
      </section>

      {/* Section 4: Sustainability & Team */}
      <section className="mb-10 pt-5 border-t border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 tracking-tight">
          4. Maintenance, Recognition & Team
        </h2>

        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          Many university labs rely on dedicated full-time technicians to maintain commercial platforms. 4C16 was designed and maintained in-house by our own academic and research staff, running as 5 <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">Docker</a> containers on a single virtual host with no commercial licensing costs.
        </p>

        <p className="text-[15px] sm:text-base leading-7 mb-5">
          The pedagogical framework and laboratory infrastructure developed for 4C16 contributed to François Pitié receiving the{' '}
          <a 
            href={labSystemContent.award.awardUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-tcd-blue font-medium hover:underline"
          >
            2026 University Excellence in Teaching Award
          </a>{' '}
          at Trinity College Dublin ({' '}
          <a 
            href={labSystemContent.award.newsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-tcd-blue hover:underline"
          >
            School of Engineering announcement
          </a>
          ).
        </p>

        <div className="bg-slate-50/80 border border-slate-200/80 rounded-lg p-4 sm:p-5 text-xs sm:text-sm space-y-3">
          <h3 className="font-semibold text-gray-800 uppercase tracking-wider text-[11px] text-slate-500">
            Platform Contributors & Architecture Team
          </h3>
          <ul className="space-y-2.5 text-gray-600">
            <li>
              <strong className="text-gray-900 font-medium">Dr. François Pitié</strong>: Module Coordinator & Course Creator. Initiated 4C16 in 2017 as Ireland's first undergraduate deep learning module; established the curriculum, pedagogical vision, and the oral viva examination model.
            </li>
            <li>
              <strong className="text-gray-900 font-medium">Dr. Vibhoothi</strong>: Architect of Gen 2 and Gen 3. Joined after contributing to <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer" className="text-tcd-blue hover:underline">VideoLAN</a>; designed the migration to Colab, Google Drive, and Caddy (Gen 2), and led the 2026 platform overhaul on 4c16.dev.
            </li>
            <li>
              <strong className="text-gray-900 font-medium">Dr. Hugh Denman</strong>: Architect of Generation 1. Ex-Google engineer; built the initial 2017 platform infrastructure on GCP with Git-based synchronous grading.
            </li>
          </ul>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="pt-5 border-t border-gray-100 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <Link 
          to="/lab-system" 
          className="text-tcd-blue hover:underline font-medium inline-flex items-center"
        >
          <ArrowLeft size={13} className="mr-1" />
          Student Guide: How the Lab System Works
        </Link>
        <div>
          Dept. of Electronic & Electrical Engineering, Trinity College Dublin
        </div>
      </footer>

    </article>
  );
}

