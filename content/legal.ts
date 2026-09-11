import type { LegalDoc } from "./types";

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    description:
      "How ResearcherNet collects, uses, shares and protects personal data on researchernet.com and app.researchernet.com, including AI processing, your rights under the DPDP Act and GDPR, and how to contact our Grievance Officer.",
    effectiveDate: "2026-09-11",
    content: `
> This document was prepared to be reviewed by legal counsel before publication.

**Effective date:** 11 September 2026

## 1. Who we are

ResearcherNet is operated by **AIMTECH Dynamics Private Limited** (CIN U62099WB2025PTC284667), a DPIIT-recognised startup registered in West Bengal, India, with its operating address at IIC, Jadavpur University, Kolkata 700032, India ("ResearcherNet", "we", "us" or "our").

This Privacy Policy applies to the marketing website at researchernet.com, the ResearcherNet application at app.researchernet.com, and any related APIs, integrations and communications (together, the "Service").

We may substitute the operator of the Service with a group company (including ResearcherNet Private Limited, whose incorporation is pending) on notice to you. Your rights under this Policy will not be reduced by any such substitution.

## 2. Scope and applicable law

We process personal data in accordance with:

- the **Digital Personal Data Protection Act, 2023** and the rules made under it (the "DPDP Act"), for all users;
- the **Information Technology Act, 2000** and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021;
- the **UK GDPR and the EU General Data Protection Regulation (GDPR)**, where you are located in the European Economic Area or the United Kingdom.

Where this Policy uses the words "Data Fiduciary" and "Data Principal", they have the meaning given in the DPDP Act. Under the GDPR, we act as the controller for personal data described in this Policy, except where we process institutional data on behalf of an institutional customer (see Section 11).

## 3. Personal data we collect

### 3.1 Data you provide to us

- **Account data:** name, email address, password (stored as a salted hash), profile photograph, affiliation, position, research interests and biography.
- **Research profile data:** publications, citations, co-authors and identifiers imported, with your authorisation, from Google Scholar, ORCID or ResearchGate, or entered manually.
- **Content:** documents, papers, manuscripts, LaTeX projects, notes, feed posts, comments, chat messages and meeting recordings or transcripts (where you enable them).
- **Billing data:** billing name, address, GSTIN (for Indian invoices) and transaction records. Card details are collected directly by our payment processor and are never stored on our systems.
- **Communications:** messages you send to hello@researchernet.com, support requests and survey responses.

### 3.2 Data collected automatically

- **Usage and interaction data:** pages viewed, features used, searches made, documents opened, recommendations shown and acted upon, timestamps and session duration.
- **Device and technical data:** IP address, browser type, operating system, language, referring URL and approximate location derived from IP address.
- **Cookies and similar technologies:** see Section 8.

### 3.3 Data from third parties

- **Sign-in providers:** if you sign in with Google or GitHub, we receive your name, email address, profile picture and a unique identifier from that provider, in accordance with your settings there.
- **Institutional administrators:** if your account is provisioned by an institution, your administrator may provide your name, email address and role.

## 4. How we use personal data and our lawful basis

| Purpose | Data used | Lawful basis (DPDP / GDPR) |
| --- | --- | --- |
| Creating and operating your account and profile | Account, research profile, sign-in data | Consent; performance of a contract |
| Providing search, AI summarisation, collaborator matching, feed, chat, video meetings, LaTeX co-editing, grant alerts and analytics | Content, research profile, usage data | Consent; performance of a contract |
| Processing payments, issuing GST invoices and preventing fraud | Billing data | Performance of a contract; legal obligation |
| Sending transactional emails (verification, alerts, invoices, security notices) | Account data | Performance of a contract; legitimate interests |
| Sending product updates and newsletters | Account data | Consent (opt out at any time) |
| Improving the Service, including our recommendation systems | Aggregated, de-identified interaction data | Legitimate interests; legitimate uses under the DPDP Act |
| Security, abuse prevention and audit logging | Device, technical and usage data | Legitimate interests; legal obligation |
| Complying with law, court orders and lawful government requests | Any relevant data | Legal obligation |

## 5. AI processing of your data

ResearcherNet uses artificial intelligence to power features such as semantic search, Chat with Paper, summarisation, collaborator matching and grant alerts. Please read this section carefully.

- **Third-party models.** Your documents, queries and relevant profile data are sent to large language models operated by third-party providers (for example OpenAI, Anthropic, and Meta Llama-class models served through hosting providers) in order to generate the output you request. These providers process the data as our processors under contractual terms that prohibit use of your data for their own purposes.
- **No training of public models on unpublished manuscripts.** Unpublished manuscripts, drafts and private documents you upload are **not** used by us, and are contractually not permitted to be used by our providers, to train publicly available AI models.
- **Interaction dataset.** We maintain an aggregated, de-identified dataset of how users interact with the Service (for example, which search results are opened, which suggested collaborators are contacted, and which summaries are rated helpful). We use this "interaction dataset" solely to improve ResearcherNet's own recommendation and ranking systems. It does not include the text of your documents or messages, and we apply technical measures so that it cannot reasonably be linked back to you.
- **AI output is generated automatically** and may be inaccurate or incomplete. We do not make legally or similarly significant decisions about you based solely on automated processing.

You can limit AI processing by not uploading a document or by deleting it. Some features cannot function without AI processing.

## 6. How we share personal data

We do not sell personal data. We share it only as follows:

- **Other users:** your public profile, publications and feed posts are visible to other users according to your visibility settings. Messages and shared documents are visible to their recipients.
- **Institutional administrators:** where your account belongs to an institutional workspace, administrators can see your name, email, role, usage summaries and content shared in that workspace.
- **Sub-processors:** service providers who process data on our instructions, currently in these categories: cloud infrastructure providers (hosting, storage, backups); large language model providers; a transactional email provider; analytics (Google Analytics 4, loaded through Google Tag Manager only with your consent); and video conferencing infrastructure. The current list of sub-processors is available on request at privacy@researchernet.com.
- **Legal and safety:** courts, regulators, law enforcement and other parties where required by applicable law or to protect the rights, property or safety of ResearcherNet, our users or the public.
- **Corporate transactions:** a successor or group company in connection with a merger, acquisition, restructuring or transfer of assets, subject to this Policy.

## 7. International transfers

Our servers and sub-processors may be located outside India, including in the United States, the European Union, the United Kingdom and Singapore. Where we transfer personal data outside India, we do so in compliance with the DPDP Act and any restrictions notified by the Central Government. Where we transfer personal data of EEA or UK users outside those regions, we rely on adequacy decisions or the European Commission's Standard Contractual Clauses (and the UK International Data Transfer Addendum), together with supplementary measures where required. Copies of the relevant safeguards are available on request.

## 8. Cookies and analytics

- **Essential cookies** are required for sign-in, security, load balancing and remembering your preferences. They cannot be switched off.
- **Analytics cookies** (Google Analytics 4 via Google Tag Manager) are set **only with your consent**, which we collect through a consent banner implemented with Google Consent Mode v2. You can withdraw consent at any time through the cookie settings link in the footer.
- We do **not** use advertising or cross-site tracking cookies.

You can also control cookies through your browser settings; disabling essential cookies may prevent the Service from working.

## 9. Data retention

- **Account and profile data** is retained for as long as your account is active and for **90 days** after you request deletion, to allow for recovery of accidental deletions and to complete pending transactions.
- **Backups** may retain copies of deleted data for up to **180 days**, after which they are overwritten.
- **Billing and tax records** are retained for the period required by Indian tax and company law (currently eight years).
- **Security and audit logs** are retained for up to 12 months unless needed for an investigation.
- **Aggregated, de-identified data** (including the interaction dataset) is not personal data and may be retained indefinitely.

## 10. Your rights

Subject to applicable law, you have the right to:

- **Access** the personal data we hold about you and a summary of how it is processed;
- **Correct** inaccurate or incomplete data, and **update** your profile;
- **Erase** your personal data, subject to legal retention requirements;
- **Portability:** receive your data in a structured, machine-readable format (you can export your documents and profile from account settings);
- **Withdraw consent** at any time, with the same ease with which it was given, without affecting processing already carried out;
- **Nominate** another person, under the DPDP Act, to exercise your rights in the event of your death or incapacity;
- **Object to or restrict** certain processing, and not be subject to solely automated decisions with legal effect (GDPR);
- **Lodge a complaint** with the Data Protection Board of India, or, for EEA and UK users, with your local supervisory authority.

To exercise these rights, use the controls in account settings or write to privacy@researchernet.com. We will verify your identity and respond within the time required by law (and in any case within 30 days).

## 11. Institutional accounts

Where an institution purchases an Institution or Team plan and provisions accounts for its members, the institution determines the purposes of processing for workspace data and we act as its processor. The institution's own privacy notice governs that processing, and this Policy applies to our own use of account, billing and usage data. Members should direct rights requests concerning workspace data to their institution in the first instance.

## 12. Security

We maintain technical and organisational measures appropriate to the risk, including:

- encryption of data in transit (TLS 1.2 or higher) and at rest;
- role-based access control and the principle of least privilege for staff access;
- audit logging of administrative and data-access events;
- network segmentation, vulnerability management and regular security reviews;
- contractual security obligations for all sub-processors.

No system is completely secure. Please use a strong, unique password and enable two-factor authentication where available. Report suspected vulnerabilities to security@researchernet.com.

## 13. Personal data breaches

If a personal data breach affects you, we will notify the Data Protection Board of India and affected users as required by the DPDP Act and rules, and, for EEA and UK users, the relevant supervisory authority within 72 hours where required by the GDPR. Our notice will describe the nature of the breach, the likely consequences and the measures taken.

## 14. Children

The Service is intended for adults. You must be at least 18 years of age (or the age of majority in your jurisdiction, if higher) to use it. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact privacy@researchernet.com and we will delete it.

## 15. Grievance Officer and contact

In accordance with the Information Technology Act, 2000 and the rules made under it, and the DPDP Act, our Grievance Officer and Data Protection contact is:

**[Grievance Officer name]**, Grievance Officer
AIMTECH Dynamics Private Limited
IIC, Jadavpur University, Kolkata 700032, India
Email: privacy@researchernet.com

We acknowledge complaints within 24 hours and aim to resolve them within 15 days of receipt. For general enquiries, contact hello@researchernet.com; for security matters, security@researchernet.com.

## 16. Changes to this Policy

We may update this Policy from time to time. We will post the revised version on the Service with a new effective date and, where the changes are material, notify you by email or an in-app notice at least 14 days before they take effect. Continued use of the Service after that date means you accept the revised Policy.
`,
  },
  {
    slug: "terms",
    title: "Terms of Use",
    description:
      "The terms governing use of researchernet.com and the ResearcherNet application, including acceptable use, content rights, AI disclaimers, billing and refunds, liability, and governing law.",
    effectiveDate: "2026-09-11",
    content: `
> This document was prepared to be reviewed by legal counsel before publication.

**Effective date:** 11 September 2026

## 1. Agreement to these Terms

These Terms of Use ("Terms") are a binding agreement between you and **AIMTECH Dynamics Private Limited** (CIN U62099WB2025PTC284667), a DPIIT-recognised startup registered in West Bengal, India, with its operating address at IIC, Jadavpur University, Kolkata 700032, India ("ResearcherNet", "we", "us" or "our").

They govern your use of the marketing website at researchernet.com, the ResearcherNet application at app.researchernet.com, and any related APIs, integrations and services (together, the "Service"). By creating an account or using the Service, you accept these Terms and our Privacy Policy. If you do not agree, do not use the Service.

We may substitute the contracting entity with a group company (including ResearcherNet Private Limited, whose incorporation is pending) on notice to you, without affecting your rights under these Terms.

These Terms constitute an electronic record under the Information Technology Act, 2000 and do not require a physical or digital signature.

## 2. Eligibility and accounts

- You must be at least 18 years of age (or the age of majority in your jurisdiction, if higher) and capable of entering into a binding contract.
- You may sign in with an email address and password, or through Google or GitHub. You are responsible for keeping your credentials confidential and for all activity under your account.
- You must provide accurate information and keep it up to date. You may not impersonate any person or misrepresent your affiliation with any institution.
- Notify security@researchernet.com immediately if you suspect unauthorised access to your account.

## 3. The Service

ResearcherNet is an AI-powered research collaboration platform. Features include researcher profiles (with optional import from Google Scholar, ORCID and ResearchGate), document upload and management, semantic search, AI summarisation ("Chat with Paper"), collaborator matching, a feed and social features, chat, video meetings, LaTeX co-editing, grant alerts and analytics. Features may vary by plan and may be added, changed or withdrawn from time to time.

**Third-party imports.** When you connect Google Scholar, ORCID, ResearchGate, Google or GitHub, you confirm that you are authorised to do so and that your use complies with those services' terms. We are not responsible for those services.

## 4. Your content

### 4.1 You own your research

You retain all rights, title and interest, including intellectual property rights, in the manuscripts, papers, data, LaTeX projects, posts, messages and other material you upload or create on the Service ("Your Content"). Nothing in these Terms transfers ownership of Your Content to us.

### 4.2 Licence to us

To operate the Service, you grant ResearcherNet a limited, worldwide, non-exclusive, royalty-free licence to host, store, reproduce, process, transmit, display and create derivative representations (such as embeddings, indexes and summaries) of Your Content, solely for the purpose of providing, securing and improving the Service for you and those you share with. This licence ends when you delete the content or your account, except for backup copies retained under our Privacy Policy and content you have shared with others who have not deleted it.

### 4.3 AI processing

You acknowledge that Your Content may be processed by third-party large language model providers on our behalf to deliver features. Unpublished manuscripts are not used to train publicly available models. We may use aggregated, de-identified interaction data to improve our own recommendation systems, as described in the Privacy Policy.

### 4.4 Your responsibilities

You represent that you have all rights necessary to upload Your Content and to grant the licence above, that Your Content does not infringe any third party's rights, and that you comply with any obligations you owe to co-authors, publishers, funders or your institution (including embargo and confidentiality obligations).

## 5. Acceptable use

You must not:

- upload or share content you do not have the right to share, including paywalled publisher PDFs where your licence does not permit redistribution;
- plagiarise, fabricate research results, or present AI-generated text as your own original work in breach of academic integrity or publisher policy;
- impersonate any person or institution, or misrepresent authorship or affiliation;
- scrape, crawl, harvest or bulk-download data from the Service, or access it by automated means other than our documented APIs;
- reverse engineer, decompile or attempt to extract the source code, models or prompts of the Service, or use the Service to build a competing product;
- circumvent access controls, rate limits, plan restrictions or security measures;
- upload malware, or interfere with the integrity or performance of the Service;
- harass, threaten, defame or discriminate against any person;
- send spam, unsolicited commercial messages or pyramid schemes;
- use the Service in violation of applicable law, including export controls and sanctions.

### 5.1 Prohibited content

In line with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, you must not host, display, upload, publish or share any information that:

- belongs to another person and to which you have no right;
- is defamatory, obscene, pornographic, paedophilic, invasive of another's privacy (including bodily privacy), insulting or harassing on the basis of gender, racially or ethnically objectionable, or encourages money laundering or gambling;
- is harmful to children;
- infringes any patent, trademark, copyright or other proprietary right;
- deceives or misleads the recipient about the origin of the message, or knowingly communicates misinformation or patently false information;
- impersonates another person;
- threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order, or incites the commission of any cognisable offence;
- contains a software virus or malicious code; or
- violates any law for the time being in force.

## 6. Feed and community rules

The feed, comments, chat and video meetings are shared spaces. Be respectful and accurate. We may remove content, restrict features or suspend accounts that breach these Terms, and we may do so without prior notice where the law requires or where the risk of harm is significant. You can report content through the in-app report function or to privacy@researchernet.com. We are an intermediary with respect to user content and do not pre-screen it, but we act on valid notices and orders as required by law.

## 7. Institutional accounts

Where an institution or team purchases a Team or Institution plan:

- the institution's designated administrators may create, manage, suspend and remove member accounts, control workspace settings, and access content shared within the workspace and usage reports;
- members are bound by these Terms and by any additional policies of their institution;
- the institution is responsible for ensuring that its members are eligible and that its use complies with applicable law and any written agreement between the institution and us. Where a separate written agreement exists, it prevails over these Terms in case of conflict.

## 8. Plans, billing and refunds

- **Plans.** We offer Free, Professional, Team and Institution plans. Current features and prices are shown on researchernet.com and may change on notice; changes do not affect a subscription period already paid for.
- **Currency and taxes.** Prices are quoted in USD or INR. Indian invoices attract GST at the applicable rate. Prices for other jurisdictions are exclusive of any applicable taxes, which you are responsible for.
- **Billing cycle.** Paid plans are billed monthly or annually in advance and renew automatically until cancelled.
- **Cancellation.** You may cancel at any time from account settings. Cancellation takes effect at the end of the current billing period, and you keep paid features until then.
- **Refunds.** Except where required by law, fees are non-refundable and we do not provide pro-rata refunds for unused periods or downgrades. As an exception, if this is your first paid subscription with us, you may request a full refund within 7 days of the first payment by writing to hello@researchernet.com. [confirm]
- **Failed payments.** If a payment fails, we may downgrade your account to the Free plan after reasonable notice. Content above Free-plan limits may become read-only.

## 9. Intellectual property of ResearcherNet

The Service, including its software, models, prompts, design, trademarks and documentation, is owned by ResearcherNet and its licensors and is protected by copyright, trademark and patent law. Aspects of the Service are the subject of a pending Indian patent application (application no. 202531120470). Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to use the Service for your research and professional purposes. All rights not expressly granted are reserved.

If you send us feedback or suggestions, you grant us a perpetual, irrevocable licence to use them without obligation to you.

## 10. Third-party services

The Service integrates with and links to third-party services, including Google Scholar, ORCID, ResearchGate, Google, GitHub, payment processors and video conferencing infrastructure. Those services are governed by their own terms and privacy policies. We do not control and are not responsible for them, and your use of them is at your own risk.

## 11. Service availability

We aim to keep the Service available at all times but do not guarantee uninterrupted or error-free operation. We may suspend the Service for maintenance, security or upgrades, and will try to give advance notice where practicable. **No uptime commitment applies unless set out in a written service level agreement signed by us.** We may modify or discontinue features, and where we discontinue the Service as a whole we will give you at least 30 days' notice and an opportunity to export Your Content.

## 12. Disclaimers

- **AI output may be inaccurate.** Summaries, answers, search results, collaborator suggestions, grant alerts and other AI-generated output are produced automatically and may be incomplete, out of date, biased or wrong, and may misrepresent the source material. You must verify AI output against the original sources before relying on it, citing it or including it in your work.
- **Not professional advice.** The Service does not provide legal, medical, financial, regulatory, publishing or funding advice.
- **As is.** To the fullest extent permitted by law, the Service is provided "as is" and "as available" without warranties of any kind, whether express, implied or statutory, including warranties of merchantability, fitness for a particular purpose, accuracy and non-infringement.
- **User content.** We do not endorse and are not responsible for content posted by other users.

## 13. Limitation of liability

To the fullest extent permitted by applicable law:

- ResearcherNet and its directors, employees, agents and suppliers will not be liable for any indirect, incidental, special, consequential or punitive damages, or for loss of data, profits, revenue, goodwill or research opportunity, arising out of or in connection with the Service, even if advised of the possibility of such damages;
- our total aggregate liability for all claims arising out of or in connection with the Service in any 12-month period is limited to the greater of (a) the fees you paid to us in the 12 months immediately preceding the event giving rise to the claim, and (b) for users on the Free plan or where no fees were paid, INR 10,000 (ten thousand rupees).

Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any liability that cannot be excluded under applicable law, including mandatory consumer protection law in your country of residence.

## 14. Indemnity

You will indemnify and hold harmless ResearcherNet and its directors, employees and agents from any claims, losses, liabilities, damages and expenses (including reasonable legal fees) arising out of or relating to Your Content, your breach of these Terms, your violation of any law or third-party right, or your use of the Service in breach of your obligations to any institution, publisher, funder or co-author. This clause does not apply to consumers to the extent prohibited by mandatory law.

## 15. Suspension and termination

- **By you.** You may delete your account at any time from account settings. Your data will be handled as described in the Privacy Policy.
- **By us.** We may suspend or terminate your access, with notice where practicable, if you materially breach these Terms, if required by law or a lawful order, if your account is inactive for more than 24 months on the Free plan, or if continuing to provide the Service to you creates a legal or security risk.
- **Effect.** On termination, your licence to use the Service ends. Sections 4, 9, 12, 13, 14, 15, 17 and 18 survive termination. Where we terminate without cause during a paid period, we will refund the unused portion of your fees.

## 16. Export control and sanctions

You may not use or export the Service in violation of Indian, United States, European Union, United Kingdom or other applicable export control and sanctions laws, and you confirm that you are not located in, or a national of, a country or territory subject to comprehensive sanctions, and are not on any restricted-party list.

## 17. Governing law and disputes

These Terms are governed by the laws of India. Subject to the following paragraph, the courts at Kolkata, West Bengal have exclusive jurisdiction over any dispute arising out of or in connection with these Terms or the Service.

Before commencing proceedings, you agree to first raise the dispute with us at hello@researchernet.com and to negotiate in good faith for 30 days. Nothing in this Section deprives consumers of the protection of mandatory laws or the right to bring proceedings in their country of residence where that right cannot be waived.

## 18. General

- **Entire agreement.** These Terms, the Privacy Policy and any written agreement with an institution constitute the entire agreement between you and us regarding the Service.
- **Assignment.** You may not assign these Terms without our consent. We may assign them to a group company or successor on notice.
- **Severability.** If any provision is held unenforceable, the remainder continues in effect.
- **No waiver.** Our failure to enforce any provision is not a waiver of it.
- **Notices.** We may notify you by email to your registered address or through the Service. You may notify us at the addresses below.
- **Language.** These Terms are drafted in English; any translation is for convenience only.

## 19. Changes to these Terms

We may revise these Terms from time to time. We will post the revised Terms with a new effective date and, for material changes, give at least 14 days' notice by email or in-app notice. If you do not agree to the revised Terms, you may cancel your account before they take effect; continued use after the effective date constitutes acceptance.

## 20. Contact and Grievance Officer

**General:** hello@researchernet.com
**Security:** security@researchernet.com
**Privacy, grievances and legal notices:** privacy@researchernet.com

**Grievance Officer:** [Grievance Officer name], AIMTECH Dynamics Private Limited, IIC, Jadavpur University, Kolkata 700032, India. Complaints are acknowledged within 24 hours and resolved within 15 days, in accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.
`,
  },
];
