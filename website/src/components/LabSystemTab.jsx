import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, FileText, ArrowRight, GitBranch, 
  Terminal, HardDrive, CheckCircle2, BookOpen, Clock, Award
} from 'lucide-react';
import { labSystemContent } from '../data/content';
import { getAssetUrl } from '../utils/url';

export default function LabSystemTab() {
  return (
    <div className="max-w-2xl mx-auto py-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-gray-700 leading-relaxed font-normal">
      
      {/* Sub-Navigation Toggle between Student Guide and History */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-8">
        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
          Course Infrastructure & Tools
        </span>

        <div className="inline-flex rounded-lg bg-gray-100 p-0.5 text-xs font-medium">
          <span className="px-2.5 py-1 rounded bg-white text-gray-900 shadow-xs font-semibold">
            Guide
          </span>
          <Link
            to="/lab-system/history"
            className="px-2.5 py-1 rounded text-gray-600 hover:text-gray-900 transition-colors"
          >
            History
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="mb-8 pb-5 border-b border-gray-200">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight mb-2">
          4C16 Lab System: Student Guide
        </h1>
        
        <p className="text-sm sm:text-base text-gray-600 mb-5">
          A practical overview of how your development environment, cloud storage, Git repository, and automated grading engine work together.
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={labSystemContent.platformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-tcd-blue text-white font-medium text-xs sm:text-sm hover:bg-tcd-blue-dark transition-colors shadow-xs"
          >
            Open 4c16.dev Portal
            <ExternalLink size={13} className="ml-1.5" />
          </a>
          <a
            href={getAssetUrl(labSystemContent.handbookUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white text-gray-700 font-medium text-xs sm:text-sm border border-gray-300 hover:bg-gray-50 transition-colors shadow-xs"
          >
            <FileText size={13} className="mr-1.5 text-slate-500" />
            Lab System Handbook (PDF)
          </a>
          <Link
            to="/labs"
            className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-medium text-xs sm:text-sm hover:bg-slate-200 transition-colors"
          >
            Lab Assignments
            <ArrowRight size={13} className="ml-1.5" />
          </Link>
        </div>
      </header>

      {/* Section 1: The Three Pillars */}
      <section className="mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 tracking-tight">
          1. Your Development Environment
        </h2>
        
        <p className="text-[15px] sm:text-base leading-7 mb-5 text-gray-700">
          To ensure that every student has equal access to powerful GPU compute without software installation headaches, your lab environment is split across three decoupled services:
        </p>

        <div className="space-y-4">
          <div className="border-l-2 border-tcd-blue pl-3.5 sm:pl-4">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base flex items-center">
              <Terminal size={16} className="mr-2 text-tcd-blue" />
              Interactive Execution: Google Colab GPUs
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              You write, train, and test your PyTorch deep learning models using Google Colab. Colab provides free access to hosted GPU runtimes directly inside your browser. You do not need to install PyTorch, CUDA drivers, or local packages on your personal computer.
            </p>
          </div>

          <div className="border-l-2 border-slate-400 pl-3.5 sm:pl-4">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base flex items-center">
              <HardDrive size={16} className="mr-2 text-slate-600" />
              Persistent Storage: Trinity Google Drive
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              Free Colab instances are ephemeral: when your session disconnects, temporary files on the virtual machine are wiped. To preserve your work, our workflow mounts your institutional Trinity Google Drive. All of your Jupyter notebooks, code scripts, datasets, and trained model checkpoints (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono border border-slate-200">.pt</code> / <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono border border-slate-200">.pth</code> files) are stored directly on your Drive, ensuring that your work is safe across restarts.
            </p>
          </div>

          <div className="border-l-2 border-emerald-600 pl-3.5 sm:pl-4">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base flex items-center">
              <GitBranch size={16} className="mr-2 text-emerald-600" />
              Course Code Repository: Forgejo on 4c16.dev
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              Your official coursework repository is hosted on our self-hosted <strong>Forgejo</strong> Git server at <a href={labSystemContent.platformUrl} target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">4c16.dev</a>. Each student is provisioned a private repository (e.g. <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono border border-slate-200">2025-2026/&#123;username&#125;-code</code>). Because Colab does not offer a standard terminal on free accounts, we provide a dedicated orchestration notebook (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono border border-slate-200">4c16-git-workflow.ipynb</code>) that lets you clone, pull, commit, and push your code over SSH directly from within the Colab kernel.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Assessment Loop */}
      <section className="mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 tracking-tight">
          2. The Assessment & Autograding Loop
        </h2>

        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          Assessment in 4C16 is automated, transparent, and continuous. Whenever you push code to your assessment branch, the platform evaluates your work in real time:
        </p>

        <ol className="list-decimal list-outside pl-5 space-y-3 text-[15px] sm:text-base leading-7 mb-5 text-gray-700">
          <li>
            <strong>Push Your Code:</strong> When you complete a lab task or want to check your progress, commit your files and push to your repository's designated assessment branch using the workflow notebook.
          </li>
          <li>
            <strong>Instant Webhook Dispatch:</strong> As soon as Forgejo registers your push, it immediately triggers an HTTP webhook notifying our backend service. Your submission is placed in an atomic queue for processing.
          </li>
          <li>
            <strong>Sandboxed Docker Testing:</strong> A dedicated grading daemon claims your submission, clones your commit over a secure internal link, and spins up an isolated Docker container. Inside this container, it executes the official test suite (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono border border-slate-200">assess-lab</code> and <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono border border-slate-200">tcd_test.py</code>):
            <ul className="list-disc list-outside pl-5 mt-1.5 space-y-1 text-xs sm:text-sm text-gray-600">
              <li>Verifies syntax and layer architecture implementations.</li>
              <li>Checks tensor shapes and dimensions across forward passes.</li>
              <li>Loads your trained model weights and measures performance against an unseen hold-out validation/test set.</li>
            </ul>
          </li>
          <li>
            <strong>Dashboard Feedback & Scores:</strong> Within 10 seconds of pushing, you can refresh your dashboard at <a href={labSystemContent.platformUrl} target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">4c16.dev</a> to view your granular test breakdown, unit test pass/fail indicators, and full execution logs.
          </li>
          <li>
            <strong>Iterate Freely Before the Deadline:</strong> There is no penalty for multiple submissions. You are encouraged to inspect test failures, debug your code, retrain with improved hyperparameters, and push again as many times as you like before the deadline.
          </li>
        </ol>
      </section>

      {/* Section 3: Oral Vivas */}
      <section className="mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 tracking-tight">
          3. Continuous Oral Vivas: Defending Your Work
        </h2>

        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          The autograding platform handles the routine mechanics of code execution and tensor shape verification. This fundamentally changes what happens during in-person laboratory sessions:
        </p>

        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          Rather than having teaching assistants spend lab hours checking syntax or manually grading notebooks, laboratory contact hours are dedicated to <strong>continuous oral vivas</strong>. Demonstrators and lecturers will sit with you to discuss your code, ask you to explain your model architecture, probe your understanding of training dynamics (loss curves, learning rates, regularisation), and challenge you to defend your engineering decisions.
        </p>

        <p className="text-[15px] sm:text-base leading-7 mb-3.5">
          Achieving a passing score on the automated test suite is the baseline requirement; your oral viva confirms that you genuinely understand the underlying theory and practical mechanics of your model.
        </p>
      </section>

      {/* Section 4: Getting Started Checklist */}
      <section className="mb-10 bg-slate-50/80 border border-slate-200/80 rounded-lg p-4 sm:p-5 space-y-3">
        <h2 className="text-sm sm:text-base font-semibold text-gray-900 flex items-center">
          <BookOpen size={16} className="mr-2 text-tcd-blue" />
          Getting Started Checklist
        </h2>

        <div className="space-y-2.5 text-xs sm:text-sm text-gray-600">
          <div className="flex items-start">
            <CheckCircle2 size={16} className="mr-2 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-gray-900">1. Log in to 4c16.dev:</strong> Access <a href={labSystemContent.platformUrl} target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">4c16.dev</a> using your Trinity College Dublin Single Sign-On credentials to activate your account.
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle2 size={16} className="mr-2 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-gray-900">2. Follow the Handbook:</strong> Read the <a href={getAssetUrl(labSystemContent.handbookUrl)} target="_blank" rel="noopener noreferrer" className="text-tcd-blue font-medium hover:underline">Lab System Handbook (PDF)</a> for the exact instructions on generating and adding your SSH key for Git authentication.
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle2 size={16} className="mr-2 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-gray-900">3. Open the Starter Notebook:</strong> Navigate to the <Link to="/labs" className="text-tcd-blue font-medium hover:underline">Labs Page</Link> to launch the current lab notebook in Google Colab and mount your Google Drive.
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle2 size={16} className="mr-2 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-gray-900">4. Test Your Push:</strong> Use the provided <code className="text-xs bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">4c16-git-workflow.ipynb</code> notebook to make an initial commit and push to verify that your autograding dashboard shows a successful test run.
            </div>
          </div>
        </div>
      </section>

      {/* Bridge to History / Deep-Dive Page */}
      <section className="border-t border-gray-200 pt-6 mb-8">
        <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5">
          <div className="space-y-0.5">
            <div className="text-[11px] font-mono font-medium uppercase tracking-wider text-tcd-blue">
              Architecture & Origins
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-gray-900">
              Curious how the 4C16 autograding cloud works under the hood?
            </h3>
            <p className="text-xs text-gray-600">
              Read how the platform evolved from 2017 to today across three generations, the single-host Docker stack, and the engineering decisions behind it.
            </p>
          </div>

          <Link
            to="/lab-system/history"
            className="flex-shrink-0 inline-flex items-center px-3.5 py-1.5 rounded-lg bg-tcd-blue text-white font-medium text-xs sm:text-sm hover:bg-tcd-blue-dark transition-colors shadow-xs"
          >
            Read History
            <ArrowRight size={13} className="ml-1.5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-5 border-t border-gray-100 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div>
          Platform: <a href={labSystemContent.platformUrl} target="_blank" rel="noopener noreferrer" className="text-tcd-blue hover:underline font-medium">4c16.dev</a> | Course Portal: <a href="https://frcs.github.io/4c16/" className="text-tcd-blue hover:underline font-medium">frcs.github.io/4c16</a>
        </div>
        <div>
          Dept. of Electronic & Electrical Engineering, Trinity College Dublin
        </div>
      </footer>

    </div>
  );
}



