import { PROJECT_CONFIGURATION } from '@/db/project-info'
import router from 'next/dist/client/router'
import Head from 'next/head'

export default function Policy() {
  const { projectTitle, projectSubtitle } = PROJECT_CONFIGURATION

  return (
    <div>
      <Head>
        <title>{projectTitle} </title>
        <meta name='description' content={projectSubtitle} />
        {/** 👀 Replace with your custom favicon.ico */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={'relative grid grid-flow-row gap-4 m-[22px] mx-auto max-w-[1400px] w-full p-8'}>
        <span className='flex gap-2 text-xl hover:underline hover:cursor-pointer  text-green-800' onClick={() => router.push('/')}>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 self-center' viewBox='0 0 20 20' fill='currentColor'>
            <path fillRule='evenodd' d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z' clipRule='evenodd' />
          </svg>
          Return to Home
        </span>

        <h1 className='text-2xl' id='suse-open-source-policy'>
          SUSE Open Source Policy
        </h1>

        <h2 className='text-xl mt-4' id='introduction'>
          Introduction
        </h2>

        <p>Organizations today face increasing pressure to become more agile and economically efficient in order to grow, compete and survive. They must leverage digital assets, information and a surge of new infrastructure software innovation to fuel and enable their digital transformation.</p>

        <p>These emerging infrastructure technologies, which are built on open source and Linux, create new levels of freedom and flexibility. As organizations embrace this freedom and flexibility, they demand open source solutions that are reliable, secure and enterprise ready. That’s what we do.</p>

        <p>SUSE builds from its Linux heritage and works with an ecosystem of partners and communities to adapt and secure open source solutions backed by superior service and support. We enable customers to manage complexity, reduce cost and deliver business-critical services powering innovation and digital transformation.</p>

        <p>Our truly open, open source solutions, flexible business practices, lack of enforced vendor lock-in and exceptional service are more critical to customer organizations than ever before.</p>

        <p>Our consistent ability to meet these market demands creates a cycle of success, momentum and growth that allows SUSE to continue to deliver the open source innovation customers need to achieve their digital transformation goals.</p>

        <h2 className='text-xl mt-4' id='purpose'>
          Purpose
        </h2>

        <p>
          Open source is at the heart of the SUSE business and development model. We believe that Open Source is not a zero-sum game but that collaboration in the open benefits all participants and creates a broader base for everybody to build upon. SUSE is proud to be a good citizen and leader of the global open source community. Our approach to
          open source is “Open Source first, upstream first”.
        </p>

        <p>This document provides transparency on how SUSE operates and outlines our employee’s guidelines on how to deal with open source. It might also serve as inspiration for others implementing open source policies.</p>

        <p>
          SUSE uses the term “open source” for brevity and because it is the clearest descriptor in the context that we operate in. We do recognize that open source is more than a development model and that there are ideals behind it; the idea is to respect communities and user’s freedoms, and specifically, the freedoms to use, study, share, and
          improve the software. SUSE has many engineers who passionately stand behind “free and open source software” and supports these ideals as a company.
        </p>

        <p>
          When we discuss “open source software”, we refer to the definition of{' '}
          <a className='text-blue-500 hover:cursor-pointer' href='https://opensource.org/licenses'>
            open source licenses by the Open Source Initiative (“OSI”)
          </a>
          . SUSE considers “open source” to be software, including its documentation, released under a license that is compatible with OSI’s open source definition to be open source.
        </p>

        <h2 className='text-xl mt-4' id='scope'>
          Scope
        </h2>

        <p>The audience of this policy is mainly SUSE employees. However, we hope the policy inspires our partners, customers, and users to follow the same model.</p>

        <p>The policy covers two main areas; 1. How we produce open source software. This includes: how we contribute to upstream projects, how we manage the projects where we are ourselves upstream, what legal aspects have to be considered, where code is put, and how to be a good citizen of the open source community.</p>

        <ol>
          <li>
            How we consume open source software. Which means: how we use it in our products, how we deal with licenses, how we integrate it in our products with our open “factory first” work flow. We have distributed thousands of open source projects as part of our products for more than 25 years and we have learned a thing or two while doing it.
          </li>
        </ol>

        <h2 className='text-xl mt-4' id='definitions'>
          Definitions
        </h2>

        <table>
          <thead>
            <tr>
              <th>Term</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Commit message</td>
              <td>A good explanation and rationale of changes to files under source code management.</td>
            </tr>
            <tr>
              <td>Contributor</td>
              <td>
                Could be anyone who comments on an issue or pull request, people who add value to the project (whether it’s triaging issues, writing code or documentation, filing bugs, contributing use cases, or organizing events), or anybody with a merged pull request (perhaps the narrowest definition of a contributor). (Taken from
                https://opensource.guide/leadership-and-governance/ ).
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>For the purposes of this policy, the term employee includes all individuals working at all levels at all SUSE entities and affiliate businesses, whether permanent, fixed- term or temporary.</td>
            </tr>
            <tr>
              <td>openSUSE Factory</td>
              <td>openSUSE Factory is the source for openSUSE Tumbleweed and the intermediate upstream for select SUSE products.</td>
            </tr>
            <tr>
              <td>Patch</td>
              <td>A patch is a set of changes to a computer program or its supporting data designed to update, fix, or improve it.</td>
            </tr>
            <tr>
              <td>Pull request</td>
              <td>
                Contributions to a source code repository that uses a version control system are commonly made by means of a pull request, also known as a merge request. The contributor requests that the project maintainer pull the source code change, hence the name “pull request”. The maintainer has to merge the pull request if the contribution
                should become part of the source base.
              </td>
            </tr>
            <tr>
              <td>Upstream</td>
              <td>
                Within information technology, the term upstream (and related term “downstream”) refers to the flow of data. An upstream in open source is the source repository and project where contributions happen and releases are made. The contributions flow from upstream to downstream. When talking about an upstream, it’s usually the precursor
                to other projects and products. One of the best-known examples is the Linux kernel, which is an upstream project for many Linux distributions.
              </td>
            </tr>
            <tr>
              <td>Upstream First</td>
              <td>Patches are contributed upstream and included downstream only if they become part of the upstream.</td>
            </tr>
          </tbody>
        </table>

        <h2 className='text-xl mt-4' id='policy-statement'>
          Policy Statement
        </h2>

        <h3 className='font-medium' id='producing-open-source-software'>
          Producing Open Source Software
        </h3>

        <p>We develop in the open and publish our code as open source. SUSE products are fully open source. There are only rare exceptions where we don’t release code as open source. Our development model is designed to enable our engineers to produce and contribute to open source software.</p>

        <h3 className='font-medium' id='contributing-to-open-source-projects'>
          Contributing to Open Source Projects
        </h3>

        <p>SUSE considers itself as a part of the global open source community. When we intend to improve or fix bugs in open source projects, we contribute our modifications to upstream as early as possible.</p>

        <h4 id='contributing-patches'>Contributing Patches</h4>

        <p>When contributing to open source projects, follow the guidelines of those upstream projects. Respect their governance model and contribution policies. Use the license of the upstream project for your contribution provided it is a license that is compatible with the open source license definition.</p>

        <h4 id='contributing-non-code'>Contributing Non-Code</h4>

        <p>
          There are many ways to contribute to open source projects besides writing code, writing documentation, reporting bugs, helping users, discussing development and more. Apply the spirit of the guideline here as well. Be open, respectful, and collaborate. Use the agreed/accepted license of the upstream project also for non-code contributions
          provided it is a license that is compatible with the open source license definition.
        </p>

        <h4 id='contributor-licensing-agreements'>Contributor Licensing Agreements</h4>

        <p>
          Some projects require a contributor licensing agreement (CLA) which assigns certain rights to the governance body of the project. Before you can contribute to a project which requires a CLA, you need to make sure that SUSE has signed a corporate agreement for the project. SUSE already has agreements in place for many organizations,
          including Free Software Foundation, OpenStack, Cloud Foundry, Cloud Native Computing Foundation. If the project requires a CLA and is not listed here, contact your manager to establish what needs to be done to make contributions possible. Seek legal assistance if necessary.
        </p>

        <h4 id='developer-certificate-of-origin'>Developer Certificate of Origin</h4>

        <p>
          Some projects require a{' '}
          <a className='text-blue-500 hover:cursor-pointer' href='https://developercertificate.org/'>
            Developer Certificate of Origin (DCO)
          </a>
          . This is typically done by adding a <code>Signed-off-by</code> trailer in the commit message to certify that the committer has the right to do the contribution and to consent to publish it.
        </p>

        <p>If a project requires a DCO make sure that you are meeting its requirements and follow the upstream guidelines to add your DCO to your contributions.</p>

        <h4 id='respect'>Respect</h4>

        <p>
          Although technical in nature, the open source community is first and foremost about people. Treat other people with respect. Be kind, be open, respect the culture of the community you are interacting with and be aware of the diversity of people in that community. Be aware that, particularly in electronic communication, you might
          misunderstand or misinterpret what others are saying or meaning. The reverse is also true.
        </p>

        <p>
          Follow any codes of conduct and set a high bar for your own behavior. See the{' '}
          <a className='text-blue-500 hover:cursor-pointer' href='https://en.opensuse.org/openSUSE:Guiding_principles'>
            openSUSE Guiding Principles
          </a>{' '}
          for an example of how we envision the community for one of our main projects.
        </p>

        <h3 className='font-medium' id='creating-new-projects'>
          Creating new projects
        </h3>

        <p>
          Our ‘Contributing to Open Source Projects’ policy means that we identify collaboration and contribution opportunities with existing upstream projects for new open source projects as well. Before starting a new project, review existing projects and evaluate if something which already exists could be used or the project could become an
          extension or part of an existing upstream project.
        </p>

        <p>When SUSE starts new projects we usually publish them as open source. The standard place for new projects is GitHub. We have three principal organizations on GitHub: openSUSE, Rancher, and SUSE.</p>

        <p>
          The principal organizations do not imply an exclusive requirement. Other organizations can be created at the discretion of the development team responsible for the project. Example of other organizations in GitHub for projects lead by SUSE are yast, OSInside, and aquarist-labs. Use the respective channels to get in contact with the teams
          if your project falls under their umbrella.
        </p>

        <p>
          All projects originated and/or led by SUSE are open for contributions. Contributions by anyone are welcome and encouraged. A contributor, a person creating a Pull Request (PR) or constructively commenting on discussions, is not necessarily a committer. A committer is a person with write access to the project. Contributions are accepted
          under the conditions of the chosen licenses for both code and non-code.
        </p>

        <p>
          For projects which are expected to have exclusive committer rights by SUSE and where we - as a company - intend to take full responsibility for the project, SUSE or Rancher are the organizations to use, depending on the scope. To create new projects under the SUSE organization, contact the administrators of the organization at{' '}
          <code>github-owners@suse.de</code>. Rancher projects generally graduate from the rancher-sandbox organization.
        </p>

        <p>For projects which have committer rights for non employees, or for projects which are open to this model, consider the openSUSE GitHub organization. openSUSE administrators can be reached by writing to the public mailing list opensuse-project@opensuse.org.</p>

        <p>
          When creating new projects it is good practice to add <code>README.md</code> and <code>CONTRIBUTING.md</code> files explaining the project and how to contribute. Projects must have a declared license.
        </p>

        <p>
          When the project is part of a larger open source ecosystem, use the license which is usually used in this ecosystem. Otherwise choose a license compatible with the open source license definition, which matches the goal of the project and its interactions with other projects. This applies to both code and non-code licenses; for example
          consider the Creative Commons license for documentation, Wiki and other non-code artifacts.
        </p>

        <p>We typically don’t use contributor agreements for our own projects, but instead rely on the open source licenses providing the necessary terms using the “inbound=outbound” model. This means that contributions are made under the same license under which the project is released.</p>

        <h3 className='font-medium' id='consuming-open-source-software'>
          Consuming Open Source Software
        </h3>

        <p>We consume a lot of open source software as users, as a base for products or other projects. We also package a lot of open source software as part of the SUSE distributions.</p>

        <p>Note: When running open source software as a service there are some extra considerations necessary such as how to deal with privacy rights etc. These additional considerations are out of the scope for this document and you should seek the necessary advice.</p>

        <p>When consuming open source in anything we distribute to others we follow the guidelines below.</p>

        <h4 id='managing-source-code'>Managing Source Code</h4>

        <p>
          For all the software we redistribute we keep the source code. This is necessary to comply with the open source software licenses, the spirit of the open source model, and to create a bill of materials for our products which lists all components including dependencies. Bill of Materials should include names, versions, licenses, and
          upstream URLs for all components.
        </p>

        <p>Managing a copy of the source code means we are creating a downstream copy for each upstream. This allows us to fix problems and apply patches without being dependent on any third party.</p>

        <p>By default we follow ‘Upstream First’. Products can also choose to operate under ‘Intermediate Upstream First’.</p>

        <p>When using the Open Build Service and following the standard packaging guidelines the management of open source code is mostly taken care of.</p>

        <h4 id='intermediate-upstream-first'>Intermediate Upstream First</h4>

        <p>This principle is a continuation of “Upstream First”.</p>

        <p>An “intermediate upstream” is any project that itself has another upstream for which it is a downstream project. It functions as an upstream project for one or more downstream projects.</p>

        <p>These “intermediate upstreams” should be open for contribution and public, which adds extra maintenance efforts.</p>

        <p>The use of an “intermediate upstream” should be assessed case by case without bias, taking benefits and costs into account.</p>

        <h4 id='factory-first'>Factory First</h4>

        <p>“Factory First” means that we use openSUSE Factory as an intermediate upstream. “Factory First” is used for select SUSE products. It reduces maintenance effort and leverages the community.</p>

        <p>This still includes the responsibility to follow guidelines under “Contributing to Open Source Projects” for all individual upstream projects, such as the Linux kernel.</p>

        <p>“Factory First” is strongly recommended for products that are tightly coupled to those that use the “Factory First” model.</p>

        <p>“Factory First” applies to all new components for any product opting into “Factory First”. Creating additional intermediate upstreams is strongly discouraged.</p>

        <h4 id='legal-review'>Legal Review</h4>

        <p>SUSE conducts a legal review of the code we distribute in order to make sure we have the rights to distribute the code and that there are no legal issues such as license incompatibilities. If you follow the Factory First approach and manage your code in the build service the legal review is automatically part of the process.</p>

        <h3 className='font-medium' id='copyright'>
          Copyright
        </h3>

        <p>The code you contribute upstream or publish as open source as part of your job at SUSE in your work time is copyrighted or otherwise owned by SUSE. Use “SUSE LLC” when attributing the copyright. Use your “@suse.com” email address for contributions.</p>

        <h3 className='font-medium' id='licenses'>
          Licenses
        </h3>

        <p>All code licensed under an OSI-approved license can generally be used. Be careful when combining code with different licenses. Certain licenses are incompatible when combined in the same program. Mere aggregation in the distribution usually does not pose a problem. Consult with the SUSE legal team if you are not sure.</p>

        <h3 className='font-medium' id='patents'>
          Patents
        </h3>

        <p>
          SUSE is a founding member of the{' '}
          <a className='text-blue-500 hover:cursor-pointer' href='http://www.openinventionnetwork.com/'>
            Open Invention Network (OIN)
          </a>
          . We are committed to the non-aggression patent pool and to reducing patent-induced threats to the Linux ecosystem.
        </p>

        <h2 className='text-xl mt-4' id='reporting-a-violation-of-this-policy'>
          Reporting a Violation of This Policy
        </h2>

        <h3 className='font-medium' id='help'>
          Help
        </h3>

        <p>When you are unsure, or have questions or concerns, please discuss them with your manager. They can help you or facilitate help from others.</p>

        <h3 className='font-medium' id='foss-liaison'>
          FOSS Liaison
        </h3>

        <p>
          If you have any inquiries about FOSS compliance at SUSE please contact Ciaran Farrell{' '}
          <a className='text-blue-500 hover:cursor-pointer' href='mailto:ciaran.farrell@suse.com'>
            ciaran.farrell@suse.com
          </a>
          .
        </p>

        <h2 className='text-xl mt-4' id='roles-and-responsibilities'>
          Roles and Responsibilities
        </h2>

        <p>Employees have the responsibility to follow and familiarize themselves with the policy.</p>

        <h2 className='text-xl mt-4' id='exceptions'>
          Exceptions
        </h2>

        <p>Not applicable.</p>

        <h2 className='text-xl mt-4' id='related-documentation'>
          Related Documentation
        </h2>

        <table>
          <thead>
            <tr>
              <th>Document</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Public facing version of SUSE Open Source policy</td>
              <td>https://opensource.suse.com/suse-open-source-policy</td>
            </tr>
            <tr>
              <td>The Source of the SUSE Open Source policy</td>
              <td>https://github.com/SUSE/open-source-policy</td>
            </tr>
          </tbody>
        </table>

        <h2 className='text-xl mt-4' id='policy-review'>
          Policy Review
        </h2>

        <p>Proposed changes are reviewed via pull requests to https://github.com/SUSE/open-source-policy/ by policy reviewers and the owner. At least one approval is needed to accept the change in GitHub.</p>

        <p>The Policy itself is revisited and republished at least on an annual basis. Pull requests are reviewed in a timely fashion or as needed.</p>

        <p className='flex gap-2'>
          Copyright 2021 SUSE LLC. This work is licensed under a{' '}
          <a className='text-blue-500 hover:cursor-pointer' href='https://creativecommons.org/licenses/by-sa/4.0/' target='_blank' rel='noreferrer'>
            Creative Commons Attribution-ShareAlike 4.0 International License.
          </a>
        </p>
      </main>
    </div>
  )
}
