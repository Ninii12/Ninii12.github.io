export type ProjectAccent =
  | 'beauty'
  | 'pet'
  | 'fintech'
  | 'technology'
  | 'travel'

export type Project = {
  slug: string
  index: string
  category: string
  title: string
  deck: string
  cardDescription: string
  accent: ProjectAccent
  channels: string[]
  scenario: string
  challenge: {
    headline: string
    body: string
  }
  audience: {
    name: string
    detail: string
    need: string
  }[]
  strategy: {
    hypothesis: string
    positioning: string
    promise: string
    personality: string
    messages: string[]
  }
  pillars: {
    name: string
    description: string
    formats: string
  }[]
  concepts: {
    title: string
    hook: string
    format: string
    cta: string
    detail: string
  }[]
  measurement: {
    question: string
    method: string
  }[]
  risks: {
    risk: string
    mitigation: string
  }[]
  reflection: string
  nextSteps: string[]
}

export const projects: Project[] = [
  {
    slug: 'beauty-skincare',
    index: '01',
    category: 'Beauty & Skincare',
    title: 'Building Trust Beyond the Product',
    deck: 'A calm, credible content system for first-time skincare buyers.',
    cardDescription:
      'Replacing jargon with clarity, and product promises with realistic education that beginners can actually use.',
    accent: 'beauty',
    channels: ['Instagram', 'TikTok', 'Pinterest'],
    scenario:
      'A hypothetical direct-to-consumer skincare brand is preparing to launch a simplified three-step routine for people buying their first proper skincare products. The category is crowded with actives, percentages and promises. The brand wants to be known for making skincare feel understandable, not for shouting the loudest.',
    challenge: {
      headline:
        'Beginners are told their routine is wrong before they have been given a way to understand it.',
      body:
        'Confusing ingredient names, conflicting advice and fear-based messaging create paralysis. In response, many brands add to the noise with more claims and more steps. The strategic problem is to become the calm, credible first stop for beginners without overpromising results, oversimplifying safety or sounding like a textbook.',
    },
    audience: [
      {
        name: 'The cautious beginner',
        detail:
          'Buying a first routine and worried about irritation, wasted money or looking naive.',
        need:
          'Plain language, realistic expectations and a clear next step they can repeat without help.',
      },
      {
        name: 'The routine resetter',
        detail:
          'Has tried too many products and wants to simplify, but does not want to lose progress.',
        need:
          'Help distinguishing essential steps from optional ones, with honest guidance about what each product can and cannot do.',
      },
      {
        name: 'The quiet researcher',
        detail:
          'Reads comments and saves posts privately before making a purchase. Rarely posts but researches deeply.',
        need:
          'Saveable, reference-style content with sources, caveats and a low-pressure invitation to ask questions.',
      },
    ],
    strategy: {
      hypothesis:
        'If the brand consistently translates skincare language into plain English, shows realistic routines and makes the next step obvious, then beginners may save and share the content, return to the profile and feel more confident taking the next step.',
      positioning:
        'The skincare brand for people who want to understand what they are putting on their skin.',
      promise: 'Clarity first. Confidence follows.',
      personality:
        'Calm, candid, gently witty and never superior. The friend who happens to have read the label.',
      messages: [
        'Start with three steps, not twelve.',
        'Ingredients, in plain English.',
        'Your skin is not a trend cycle.',
        'Real routines. Honest expectations.',
      ],
    },
    pillars: [
      {
        name: 'Ingredient, decoded',
        description:
          'One ingredient at a time: what it is, what it is used for, who it may suit and what a beginner should know before trying it.',
        formats: 'Saveable carousels, short Reels, pinned glossary',
      },
      {
        name: 'Routine, simplified',
        description:
          'The order of products, the difference between essential and optional steps, and how to build a routine without buying everything at once.',
        formats: 'Step-by-step carousels, annotated routine Reels, checklists',
      },
      {
        name: 'Skin, in real life',
        description:
          'Unretouched textures, ordinary mornings and honest check-ins. Content that makes room for skin that changes, reacts and has bad weeks.',
        formats: 'Photo carousels, diary Reels, community Stories',
      },
      {
        name: 'Myth vs. method',
        description:
          'A measured response to common skincare myths. The aim is context, not conflict: explain why a claim is incomplete instead of chasing a takedown.',
        formats: 'Talking-head Reels, comment reply videos, comparison carousels',
      },
      {
        name: 'Behind the formula',
        description:
          'How products are developed, how to patch test, why a formula changed and what the brand is still learning. Transparency without a lab-coat costume.',
        formats: 'Stories, short documentaries, Q&A carousels',
      },
    ],
    concepts: [
      {
        title: 'The three-step rule',
        hook: 'Your skincare routine does not need twelve steps. Start with these three.',
        format:
          'A short Reel: creator-to-camera opening, product close-ups, on-screen text for each step and a final card that names the one step people most often skip.',
        cta: 'Save this for your first shop.',
        detail:
          'The concept deliberately removes choice before adding product. The first half earns attention with permission; the second half demonstrates the routine. A follow-up post can explain when to add a fourth step.',
      },
      {
        title: 'Read the label: five terms, decoded',
        hook: 'Niacinamide? Ceramides? Here is the plain-English version.',
        format:
          'A seven-slide carousel. Each slide gives one term, what it is used for, who it may suit and one honest caveat. Product links appear only on the final slide.',
        cta: 'Save this and bring it to your next shop.',
        detail:
          'Designed to be a reference, not a sales sequence. The value is in the middle slides; the product is a logical next step for people who want to go further, not a toll gate.',
      },
      {
        title: 'Seven days, no overthinking',
        hook: 'I used the same three products for a week. Here is what actually changed — and what did not.',
        format:
          'A diary Reel with day-by-day captions and honest reflections. No before-and-after transformation, no promised outcomes, no dramatic lighting.',
        cta: 'Comment with the step you always skip.',
        detail:
          'This format makes room for consistency without turning a routine into a transformation story. It also creates a comment prompt that can reveal real audience habits and objections for future content.',
      },
    ],
    measurement: [
      {
        question: 'Can a beginner explain the routine back without a glossary?',
        method:
          'Short comprehension conversations after viewing the content, with follow-up questions about the words and steps people remembered.',
      },
      {
        question: 'Are people saving the explainers and returning to them?',
        method:
          'Review saves alongside profile visits and repeat visits. Treat these as directional signals, not proof of understanding.',
      },
      {
        question: 'Are comments asking follow-up questions rather than only reacting?',
        method:
          'Lightweight comment coding for questions, product interest, confusion, criticism and spam. Review patterns rather than counting a single number.',
      },
      {
        question: 'Does the content make the next step feel clearer?',
        method:
          'Ask a small group of first-time buyers to talk through what they would do next, then compare that with the intended journey.',
      },
      {
        question: 'Where does the education start to feel like a sales pitch?',
        method:
          'Review the content sequence with fresh eyes and collect feedback on when product mentions begin to weaken trust.',
      },
    ],
    risks: [
      {
        risk: 'Implied medical or treatment claims.',
        mitigation:
          'Use cosmetic education language, keep caveats visible, avoid before-and-after promises and route every script through a claims checklist before publishing.',
      },
      {
        risk: 'Oversimplifying a nuanced topic.',
        mitigation:
          'Give the simple answer first, then link to a fuller guide. Make the limitations part of the content rather than fine print.',
      },
      {
        risk: 'Education that feels like a sales funnel.',
        mitigation:
          'Keep product mentions out of the first two-thirds of most posts and review whether sales-led calls to action make the content feel less useful.',
      },
      {
        risk: 'Audience distrust of brand-led expertise.',
        mitigation:
          'Be transparent about sourcing, invite qualified practitioners where appropriate and show the brand’s own uncertainties.',
      },
      {
        risk: 'Format fatigue and platform change.',
        mitigation:
          'Maintain a reusable education library and rotate formats. Revisit the series periodically rather than repeating the same template indefinitely.',
      },
    ],
    reflection:
      'The biggest strategic risk here is sounding like another brand explaining why the audience is doing skincare wrong. The more distinctive territory is permission: fewer steps, clearer language, honest expectations. Success should not be judged by a single viral post. It should be judged by whether a beginner can repeat the advice a week later and feel more confident making a decision.',
    nextSteps: [
      'Run short interviews with first-time skincare buyers to test the language and the three-step premise.',
      'Audit the most-saved competitor posts in the category and identify which questions remain unanswered.',
      'Build a claims and caveats checklist with a qualified reviewer before producing any education content.',
      'Create a reusable carousel template and a Reel shot list that a small team can produce consistently.',
      'Set an honest baseline and test the first hook before expanding the content calendar.',
    ],
  },
  {
    slug: 'pet-brands',
    index: '02',
    category: 'Pet Brands',
    title: 'From Pet Owners to a Community',
    deck: 'An entertainment-first community strategy for a brand that wants to belong, not interrupt.',
    cardDescription:
      'Building repeatable formats, creator partnerships and low-effort ways for pet parents to see themselves in the feed.',
    accent: 'pet',
    channels: ['Instagram', 'TikTok', 'Facebook group'],
    scenario:
      'A hypothetical pet lifestyle brand is entering a category full of advice, products and very cute animals. It wants to build a community around pet parenthood rather than buy attention one post at a time. The product range is still being finalised, so the social strategy has to earn a following before it has something to sell.',
    challenge: {
      headline:
        'Every pet brand says it is a community. Very few give people a reason to participate.',
      body:
        'The category runs on emotion, but most brand feeds alternate between product shots and generic pet memes. Community is treated as a hashtag or a comment prompt, not as a system with rituals, recognition and response. The problem is to create repeatable reasons for pet parents to show up, share their own pets and feel recognised without making every interaction a sales opportunity.',
    },
    audience: [
      {
        name: 'The everyday pet parent',
        detail:
          'Treats their pet as family and uses social media to laugh, compare notes and feel less alone in the chaos.',
        need:
          'Relatable humour, a sense of recognition and a brand that does not take itself too seriously.',
      },
      {
        name: 'The first-time pet parent',
        detail:
          'Learning as they go and encountering contradictory advice about food, training and wellbeing.',
        need: 'Simple, trustworthy care guidance without panic or judgement.',
      },
      {
        name: 'The community connector',
        detail:
          'Shares pet content, belongs to breed or interest groups and enjoys being featured or consulted.',
        need:
          'Low-effort ways to contribute, visible credit and a reason to return beyond the next product drop.',
      },
    ],
    strategy: {
      hypothesis:
        'If the brand behaves like a generous community host — creating repeatable formats, celebrating member stories and making participation low-effort — then comments, shares and user-generated submissions may become a warmer path to consideration.',
      positioning:
        'The pet brand that makes pet parenthood feel less lonely and more fun.',
      promise: 'Good company for the good, the weird and the muddy bits.',
      personality:
        'Warm, playful, quick to laugh and never shaming. The group chat that always has a story.',
      messages: [
        'Your pet is not naughty. They are a character.',
        'Share the chaos.',
        'Care advice without the panic.',
        'Made for the moments between the milestones.',
      ],
    },
    pillars: [
      {
        name: 'Pet-parent reality',
        description:
          'The ordinary, slightly ridiculous moments of living with an animal: the interrupted meeting, the missing sock, the early alarm.',
        formats: 'Short Reels, photo dumps, text-led carousels',
      },
      {
        name: 'The chaos files',
        description:
          'Entertainment-first formats built around dramatic exits, questionable choices and the unbothered stare of a pet who knows exactly what they did.',
        formats: 'Reels with original text overlays, meme-style posts, sound-led edits',
      },
      {
        name: 'Care, without the panic',
        description:
          'Clear, sourced guidance for everyday questions, with a consistent reminder that the brand is not a replacement for veterinary care.',
        formats: 'Carousels, expert-reviewed checklists, Story Q&As',
      },
      {
        name: 'Community spotlight',
        description:
          'A regular stage for the audience: pet of the week, dramatic exit submissions, creator takeovers and thoughtful questions from the community.',
        formats: 'UGC Reels, carousel features, Story takeovers',
      },
      {
        name: 'Behind the brand',
        description:
          'The team’s own pets, product decisions, mistakes and learning. A human view of the people behind the feed.',
        formats: 'Stories, candid Reels, photo diaries',
      },
    ],
    concepts: [
      {
        title: 'POV: you said the word “walk”',
        hook: 'POV: you said “walk” three minutes ago and now you live here.',
        format:
          'A very short Reel using pet footage, a relatable text overlay and a trending sound. The edit is deliberately simple so it can be reproduced weekly with different pets.',
        cta: 'Tag the pet parent who lives this daily.',
        detail:
          'A low-production, high-recognition format designed to make participation easy. The community team can save strong comments and use them as prompts for future episodes.',
      },
      {
        title: 'The dramatic exit',
        hook: 'Show us your pet’s most dramatic exit. We will go first.',
        format:
          'A recurring UGC challenge: a launch Reel, a submission route and a round-up carousel featuring credited entries. One clear prompt, one recurring slot.',
        cta: 'Submit your clip — the best exits get featured in the round-up.',
        detail:
          'The format gives the community a role and a reason to return. Guidelines cover safety, music rights and consent, and every featured pet gets a credit and a direct reply.',
      },
      {
        title: 'The pet-parent starter pack',
        hook: 'Nobody warns you about the emotional support you will need for a vet visit.',
        format:
          'A six-slide illustrated carousel mixing light recognition with practical preparation: questions to ask, what to bring and how to keep the carrier calm.',
        cta: 'Save this for the next first.',
        detail:
          'Pairs utility with warmth and gives everyday care questions a calm, useful shape. Care content is reviewed against a source checklist and never presents the brand as a medical authority.',
      },
    ],
    measurement: [
      {
        question: 'Does the content feel like something people want to send to another pet parent?',
        method:
          'Look at shares alongside the comments and replies that follow. Read the conversation, not only the total.',
      },
      {
        question: 'Is the community actually participating?',
        method:
          'Review submissions per prompt, unique contributors and repeat participation. Check whether people understand the prompt without extra explanation.',
      },
      {
        question: 'Is there a conversation, or only an audience?',
        method:
          'Compare comments with the brand’s own response rate and time-to-first-response. Read for warmth, confusion and safety concerns.',
      },
      {
        question: 'Is the right kind of person returning?',
        method:
          'Pair follower growth with Story views, saves and community-group activity rather than judging vanity reach alone.',
      },
      {
        question: 'Does the community feel safe and welcomed?',
        method:
          'Sample comments for warmth, confusion, criticism and safety flags. Review every safety concern with a clear escalation path.',
      },
    ],
    risks: [
      {
        risk: 'Care content being read as veterinary advice.',
        mitigation:
          'Keep a clear educational disclaimer, use qualified reviewers for health topics and direct urgent questions to a vet.',
      },
      {
        risk: 'UGC rights, privacy and safety.',
        mitigation:
          'Use a simple submission release, ask permission before featuring, avoid identifiable people without consent and publish clear community guidelines.',
      },
      {
        risk: 'Humour that excludes or shames.',
        mitigation:
          'Test jokes with a small external panel, avoid breed or owner stereotypes and review comments for emerging harm.',
      },
      {
        risk: 'Community management becoming invisible labour.',
        mitigation:
          'Set response windows, a moderation roster and escalation rules before launch. Do not promise a level of responsiveness the team cannot sustain.',
      },
      {
        risk: 'Trend fatigue.',
        mitigation:
          'Keep two or three owned formats, use trends as a layer rather than the foundation and retire formats when participation flattens.',
      },
    ],
    reflection:
      'Community is not a content pillar. It is an operating model: how quickly the brand responds, whether people are recognised, and whether the rules feel fair. A hashtag cannot manufacture belonging. The most important design decision is not the meme format; it is the promise the brand makes about how it will show up when the audience participates.',
    nextSteps: [
      'Interview a small group of pet parents about the content they share and the communities they already value.',
      'Write community guidelines, a response charter and a UGC consent process.',
      'Commission two creators for a small format test and compare their comment quality and participation with brand-produced content.',
      'Build a shared content bank of approved care topics and source links.',
      'Run the dramatic-exit mechanic for a short period and measure repeat participation before scaling it.',
    ],
  },
  {
    slug: 'fintech',
    index: '03',
    category: 'Fintech',
    title: 'Making Money Conversations Clearer',
    deck: 'A trust-first content strategy for a money-transfer app that wants to make cross-border payments feel less opaque.',
    cardDescription:
      'Showing the fee, the rate and the steps before someone sends money — without hype, hidden costs or pretending the product is the only answer.',
    accent: 'fintech',
    channels: ['Instagram', 'TikTok', 'YouTube'],
    scenario:
      'A hypothetical money-transfer app is preparing to reach people who send money across borders to family and friends. The category runs on trust, but the experience is often explained through fees, exchange-rate margins and arrival windows that are difficult to compare. The brand wants to be known for helping people understand the cost and the steps before they send, not for promising the lowest price or the fastest transfer.',
    challenge: {
      headline:
        'People are asked to trust a service with their money before they can see how it works.',
      body:
        'Money-transfer content often leads with reassurance, speed or a headline rate. The details that matter — what the fee includes, how the exchange rate is applied, when the money may arrive and what happens if something goes wrong — are buried or treated as fine print. The brand needs to make those details approachable without giving regulated financial advice or implying a guarantee it cannot make.',
    },
    audience: [
      {
        name: 'The first-time sender',
        detail:
          'Sending money to family or friends abroad and unsure how fees, rates and arrival estimates fit together.',
        need:
          'A plain explanation of what happens next, with enough detail to ask a better question before pressing send.',
      },
      {
        name: 'The regular sender',
        detail:
          'Makes transfers often and wants fewer surprises, clearer receipts and a reliable way to check the details.',
        need:
          'Consistent explainers, practical checklists and honest language about what the app can and cannot control.',
      },
      {
        name: 'The cautious researcher',
        detail:
          'Compares options, reads the terms and wants to understand security and limitations before choosing a service.',
        need:
          'Transparent trade-offs, credible security guidance and a clear route to human support.',
      },
    ],
    strategy: {
      hypothesis:
        'If the brand explains the real cost, the path and the limits before asking for a transfer, then people may understand the trade-offs more clearly and feel more confident choosing the service.',
      positioning: 'Money transfer that shows its working.',
      promise: 'Clear costs. Clear steps. Fewer surprises.',
      personality:
        'Calm, precise and human. A well-informed friend who reads the fine print and explains it without making you feel foolish.',
      messages: [
        'See the cost before you send.',
        'The rate is part of the story.',
        'Your questions are not naive.',
        'Check the details. Then decide.',
      ],
    },
    pillars: [
      {
        name: 'The cost, before you send',
        description:
          'One transfer scenario at a time: the fee, the exchange rate, the arrival estimate and the assumptions behind each example. The product appears only after the explanation.',
        formats: 'Saveable carousels, annotated screen-recorded Reels, glossary Stories',
      },
      {
        name: 'The path your money takes',
        description:
          'What happens after someone presses send: the details being checked, the status updates they can expect and the questions to ask if something looks wrong.',
        formats: 'Step-by-step Reels, flow carousels, checklist posts',
      },
      {
        name: 'Questions before you press send',
        description:
          'The questions people hesitate to ask, answered carefully and without shame. Questions are anonymised, reviewed for accuracy and paired with a clear next step.',
        formats: 'Comment reply Reels, Q&A carousels, Story prompts',
      },
      {
        name: 'Security without the scare tactics',
        description:
          'Practical guidance on protecting an account and spotting a scam, with honest limits about what the app will never ask for and when to contact support.',
        formats: 'Explainer Reels, pinned checklists, short interview clips',
      },
    ],
    concepts: [
      {
        title: 'The fee, unpacked',
        hook: 'The number you see is not the whole story. Here is how to read the cost of a transfer.',
        format:
          'A saveable carousel built around one clearly labelled illustrative transfer. It separates the fee, the exchange rate and the estimated arrival window, then names what the example leaves out.',
        cta: 'Save this before your next transfer.',
        detail:
          'The concept treats clarity as the hook. It avoids “lowest fee” claims and shows the assumptions that would need to be checked in the product. A final slide points to the support route for questions.',
      },
      {
        title: 'Before you press send',
        hook: 'Five details worth checking before the money leaves your account.',
        format:
          'A short screen-recorded Reel with captions and dummy data: recipient details, fee, rate, arrival estimate and the route to help. The checklist is also published as a text carousel.',
        cta: 'Save the checklist and come back when you are ready.',
        detail:
          'The content gives the audience a useful action whether or not they choose the brand. The demonstration uses dummy data and makes the difference between an estimate and a guarantee explicit.',
      },
      {
        title: 'The question people whisper',
        hook: '“Is it safe to send money to family abroad?” A calm place to start.',
        format:
          'A reply Reel or short explainer that separates account security, scam awareness and the limits of any transfer service. The answer includes when to stop and contact support.',
        cta: 'Send this to someone who is about to make their first transfer.',
        detail:
          'The format is designed to make a difficult question askable. It does not promise that a transfer is risk-free; it shows the checks a person can make and the questions the brand should be able to answer.',
      },
    ],
    measurement: [
      {
        question: 'Can someone explain the difference between the fee and the exchange rate after seeing the post?',
        method:
          'Short comprehension conversations using a dummy transfer example. Ask people to describe the cost in their own words.',
      },
      {
        question: 'Do comments show confusion, trust or a better question?',
        method:
          'Lightweight comment coding for questions, product interest, security concerns, confusion and criticism. Review patterns with the support team.',
      },
      {
        question: 'Do saves and return visits suggest the checklist is useful?',
        method:
          'Review saves alongside return visits and comments asking for the next step. Treat the signals as directional, not as proof of understanding.',
      },
      {
        question: 'Are people asking more specific, answerable questions?',
        method:
          'Compare the quality of questions in comments and support conversations before and after the education series.',
      },
      {
        question: 'Does the content create trust without overpromising?',
        method:
          'Ask a small group what they believe the service can and cannot do after viewing the content. Look for gaps between the intended message and what people heard.',
      },
    ],
    risks: [
      {
        risk: 'Content being interpreted as regulated financial advice.',
        mitigation:
          'Keep content educational, use plain disclaimers, avoid product recommendations and route scripts through legal and compliance review in each market.',
      },
      {
        risk: 'Security guidance becoming false reassurance.',
        mitigation:
          'Avoid guarantees, explain what the service will never ask for, link to verified support routes and update guidance as threats change.',
      },
      {
        risk: 'Hidden fees or outdated examples undermining trust.',
        mitigation:
          'Label every example as illustrative, date operational details, show the assumptions and review rates and arrival estimates before reuse.',
      },
      {
        risk: 'Oversimplification hiding important trade-offs.',
        mitigation:
          'Give a usable answer first, then name the limitation. Link to fuller guidance and invite questions rather than pretending a transfer is simple.',
      },
      {
        risk: 'Accessibility barriers in financial content.',
        mitigation:
          'Caption every video, provide text summaries, use plain-language definitions and check colour contrast in charts and tables.',
      },
    ],
    reflection:
      'Trust is not a visual style. It is knowing what will happen, what it will cost and who to ask when something goes wrong. The most useful content in this category may not look like a campaign at all: it may look like a clear checklist, a labelled example and a patient answer to a question someone was embarrassed to ask.',
    nextSteps: [
      'Interview first-time and regular senders about the questions they ask before a transfer.',
      'Map the questions the support team hears most often and identify where the content is missing.',
      'Build a compliance and claims checklist with a qualified reviewer before producing any education content.',
      'Test the fee explainer for comprehension with a small external group using dummy data.',
      'Audit the first set of examples so every rate, fee and arrival estimate is dated and clearly illustrative.',
    ],
  },
  {
    slug: 'technology',
    index: '04',
    category: 'Technology',
    title: 'Turning Features into Everyday Value',
    deck: 'A problem-first content strategy for a product that is easier to use than it is to explain.',
    cardDescription:
      'Moving from feature lists to real workdays, with short demonstrations that show the value before asking for a trial.',
    accent: 'technology',
    channels: ['LinkedIn', 'Instagram', 'YouTube'],
    scenario:
      'A hypothetical work-management platform has shipped a set of automation and reporting features. Product marketing currently leads with capability lists, but the social audience is not engaging. The team suspects the features are useful; the content has not yet made that usefulness obvious.',
    challenge: {
      headline: 'The feature is not the story. The changed workday is.',
      body:
        'Feature-led content assumes the audience already understands the problem and the vocabulary. In a crowded productivity category, buyers are skeptical of setup time, team adoption and promised time savings. The challenge is to demonstrate value quickly, with honest limitations, and to give a small team a reason to take the next step without overpromising what automation can do.',
    },
    audience: [
      {
        name: 'The operations generalist',
        detail:
          'Holds a broad role in a small company and needs tools that reduce coordination work without creating another system to maintain.',
        need:
          'Concrete use cases, a clear setup cost and proof that the tool fits an already messy workflow.',
      },
      {
        name: 'The team lead',
        detail:
          'Responsible for delivery and adoption, but not a full-time tool administrator.',
        need:
          'Visibility into how the feature helps the team, with language they can repeat to colleagues.',
      },
      {
        name: 'The skeptical evaluator',
        detail:
          'Has tried workflow tools before and is wary of migration, training and hidden complexity.',
        need:
          'Honest demos, limitations and a low-risk way to test before committing the team.',
      },
    ],
    strategy: {
      hypothesis:
        'If content starts with a recognisable work problem, demonstrates one feature inside one realistic workflow and ends with a low-commitment next step, then viewers may understand the value more quickly and take a more informed next step.',
      positioning: 'Software that makes the workday feel lighter.',
      promise: 'Less setup. More done.',
      personality:
        'Practical, clear and quietly confident. Allergic to jargon and respectful of the audience’s time.',
      messages: [
        'One feature. One real workday.',
        'See it before you sign up.',
        'Built for the work between the meetings.',
        'Automation you can actually explain to your team.',
      ],
    },
    pillars: [
      {
        name: 'One feature, one workday',
        description:
          'Each post begins with a familiar work problem, then shows one feature in the context of a real task rather than a product tour.',
        formats: 'Screen-recorded Reels, annotated carousels, short demos',
      },
      {
        name: 'The honest setup',
        description:
          'Short setup demonstrations that show the first step, the time it takes and the one thing a new user needs to know.',
        formats: 'Screen recordings, checklists, before-and-after clips',
      },
      {
        name: 'Workflow, rebuilt',
        description:
          'Before-and-after process stories: the messy handoff, the duplicated update, the status meeting that could have been a view.',
        formats: 'Split-screen Reels, carousels, LinkedIn posts',
      },
      {
        name: 'The honest FAQ',
        description:
          'Direct answers to objections about migration, permissions, adoption and what the automation does not do. Trust is a feature.',
        formats: 'Talking-head videos, Q&A carousels, comparison posts',
      },
      {
        name: 'Behind the build',
        description:
          'How features are prioritised, what changed after customer feedback and what the team is still learning. Useful for credibility with modern software buyers.',
        formats: 'Stories, changelog posts, short interviews',
      },
    ],
    concepts: [
      {
        title: 'The Monday reset',
        hook: 'Your Monday does not need a three-hour planning session. Try this short reset.',
        format:
          'A screen recording with a timer overlay. The demo follows one workflow: review the week, move three priorities, assign one owner and close the tabs.',
        cta: 'Save the checklist, then see the workflow in the product.',
        detail:
          'The timer is a visual promise: the content respects the audience’s time. The demo uses dummy data and a clearly labelled test workspace. A longer version can live on YouTube for evaluators who want depth.',
      },
      {
        title: 'Three features you are probably not using',
        hook: 'You do not need every feature. You need these three when your week gets messy.',
        format:
          'An eight-slide carousel. Each featured feature gets a problem, a one-line explanation, a screenshot and the moment it becomes useful.',
        cta: 'Send this to the person who keeps asking why the team needs another tool.',
        detail:
          'Designed as an internal selling tool as much as a social post. The carousel avoids ranking features by importance; it maps them to situations, which respects different team setups.',
      },
      {
        title: 'Before and after: the handoff',
        hook: 'The moment a project handoff goes wrong is usually not the handoff.',
        format:
          'A split-screen Reel showing the same task in a messy thread and in a clear, automated workflow. Captions explain what changed and what still requires human judgement.',
        cta: 'See the handoff template in the product.',
        detail:
          'The concept deliberately shows the human decision points so the automation does not look magical or suspicious. A follow-up post can answer implementation questions from comments.',
      },
    ],
    measurement: [
      {
        question: 'Does the problem hook earn attention, and does the demo keep it?',
        method:
          'Review retention patterns by hook and format. Read comments for confusion about what the product does.',
      },
      {
        question: 'Is the content useful enough to return to or share internally?',
        method:
          'Review saves and shares alongside the language people use when they send the post to a colleague.',
      },
      {
        question: 'Does the content lead to a relevant next step?',
        method:
          'Review link clicks and demo requests with the sales team. Ask whether the questions are more specific and better informed.',
      },
      {
        question: 'Does social bring people who understand the setup?',
        method:
          'Compare onboarding conversations with content themes. Look for repeated misunderstandings and product gaps.',
      },
      {
        question: 'Are the conversations better, not just more numerous?',
        method:
          'Keep a lightweight weekly note from sales and onboarding on the questions and objections they hear.',
      },
    ],
    risks: [
      {
        risk: 'Product changes make evergreen demos inaccurate.',
        mitigation:
          'Keep a small library of current demos, date-stamp content where appropriate and review every demo before reuse.',
      },
      {
        risk: 'Overpromising automation.',
        mitigation:
          'Show the human decision points, set expectations about setup and use clear limitations content as part of the campaign.',
      },
      {
        risk: 'B2B buying cycles are longer than social attribution windows.',
        mitigation:
          'Use qualified clicks and assisted-conversion signals alongside platform metrics, and involve sales in defining success.',
      },
      {
        risk: 'Demo data exposing customer information.',
        mitigation:
          'Use a dedicated test workspace, dummy data and a privacy review before recording.',
      },
      {
        risk: 'Technical language creeping back in.',
        mitigation:
          'Use a plain-language review pass and test scripts with someone outside the product team.',
      },
    ],
    reflection:
      'The useful shift is from “look what we built” to “look what stops being annoying.” That does not mean hiding the product. It means earning the demonstration with a problem the viewer recognises. The biggest limitation is organisational: social can explain value, but it cannot fix a confusing onboarding flow. The content and the product experience have to tell the same story.',
    nextSteps: [
      'Interview customers and non-users about the workarounds they use today.',
      'Audit support tickets and sales call notes for the questions that reveal misunderstanding.',
      'Build a clean demo environment with dummy data and a repeatable recording setup.',
      'Align the first social concepts with matching landing-page sections before launch.',
      'Run the hook test for a short period and review results with sales and onboarding.',
    ],
  },
  {
    slug: 'travel',
    index: '05',
    category: 'Travel',
    title: 'Inspiring the Next Meaningful Trip',
    deck: 'A beauty-plus-utility strategy for travellers who want to go deeper, not just collect destinations.',
    cardDescription:
      'Pairing destination storytelling with practical, saveable itineraries and transparent choices for a lighter trip.',
    accent: 'travel',
    channels: ['Instagram', 'TikTok', 'Pinterest'],
    scenario:
      'A hypothetical travel platform wants to move beyond destination lust. Its feed is beautiful, but saves are high and the path from inspiration to a booked trip is unclear. The brand wants to be known for meaningful, lower-impact travel without making claims it cannot substantiate.',
    challenge: {
      headline: 'Inspiration is everywhere. Practical, trustworthy travel guidance is not.',
      body:
        'Most travel feeds sell the feeling of a place while removing the place itself: the queues, the transport, the local context and the environmental cost. At the same time, “sustainable travel” is often reduced to a vague aesthetic. The challenge is to keep the beauty, add useful truth and make responsible choices concrete without greenwashing or lecturing.',
    },
    audience: [
      {
        name: 'The intentional explorer',
        detail:
          'Wants local experiences and quieter routes, but is skeptical of brands that use sustainability as decoration.',
        need:
          'Specific, verifiable detail about how to travel with more care, without a purity test.',
      },
      {
        name: 'The time-poor planner',
        detail:
          'Saves posts for later and wants an itinerary that can survive a real schedule, a budget and a wrong turn.',
        need: 'Clear logistics, realistic timings, cost signals and alternatives.',
      },
      {
        name: 'The first solo traveller',
        detail:
          'Looking for reassurance as much as inspiration, with questions about safety, transport and eating alone.',
        need:
          'Honest context, practical safety notes and a tone that does not assume a certain kind of confidence.',
      },
    ],
    strategy: {
      hypothesis:
        'If content pairs strong destination storytelling with practical, saveable itineraries and transparent lower-impact choices, then travellers may save the guides, return to them and feel more confident planning a trip.',
      positioning: 'Travel that gives more than it takes.',
      promise: 'Go deeper. Tread lighter.',
      personality:
        'Curious, grounded and quietly adventurous. A well-prepared friend, not a tour guide with a script.',
      messages: [
        'See the place, not just the postcard.',
        'A slower itinerary, a better trip.',
        'Ask before you arrive.',
        'Leave room for the unplanned.',
      ],
    },
    pillars: [
      {
        name: 'Place, not postcard',
        description:
          'Destination stories that go beyond the icon: a street, a ritual, a season, a local business, an ordinary morning.',
        formats: 'Cinematic Reels, photo essays, destination carousels',
      },
      {
        name: 'The slow itinerary',
        description:
          'Practical short guides with realistic pacing, transport notes, alternatives and space for unplanned time.',
        formats: 'Saveable carousels, one-page guides, map-led Reels',
      },
      {
        name: 'Local rhythm',
        description:
          'How a place actually moves: market days, opening hours, etiquette, seasonal closures and the small details that change a trip.',
        formats: 'Stories, annotated maps, short interviews',
      },
      {
        name: 'Travel, better',
        description:
          'Concrete, non-preachy choices: taking the train, visiting outside peak season, buying local and respecting a neighbourhood.',
        formats: 'Checklists, comparison carousels, explainer Reels',
      },
      {
        name: 'One place, three ways',
        description:
          'The same destination at different budgets, paces or seasons, so travellers can see themselves in the guide.',
        formats: 'Split carousels, Reels, interactive Stories',
      },
    ],
    concepts: [
      {
        title: '48 hours without the checklist',
        hook: 'You have 48 hours in Lisbon. Skip the queue for the famous tram and do this instead.',
        format:
          'A cinematic Reel with on-screen timings, one map transition and a final card that names what the guide leaves out.',
        cta: 'Save the route and get the full guide.',
        detail:
          'The concept keeps the beauty but immediately adds utility. The alternative is not framed as a secret; it is framed as a better use of limited time. Local context and transport notes are checked before publishing.',
      },
      {
        title: 'The three-day itinerary you can actually follow',
        hook: 'A three-day itinerary with time to get lost built in.',
        format:
          'A nine-slide carousel: overview, map, each day, a budget signal, an accessibility note, a lower-impact option and a “what we left out” slide.',
        cta: 'Save this for your trip, or download the one-page version.',
        detail:
          'This is the core saveable asset. The pacing is deliberately humane, with alternatives for different energy levels and weather. Costs are given as ranges and dated so they do not masquerade as permanent facts.',
      },
      {
        title: 'One place, three ways',
        hook: 'Same coast. Three very different trips.',
        format:
          'A six-slide comparison carousel: a slower low-budget version, a comfortable mid-range version and a short-break version, each with trade-offs rather than a “best” answer.',
        cta: 'Tell us which version sounds like your trip.',
        detail:
          'The format makes personal relevance part of the story and creates a reusable template for different destinations and seasons.',
      },
    ],
    measurement: [
      {
        question: 'Is the guide useful enough to plan with?',
        method:
          'Review saves alongside comments that ask for specific itinerary, transport or accessibility details.',
      },
      {
        question: 'Does saving lead to a next step?',
        method:
          'Look at saves, profile visits and outbound clicks together. Ask people what they did after saving the guide.',
      },
      {
        question: 'Does the story hold attention without sacrificing the useful detail?',
        method:
          'Review retention patterns by destination and hook, then read comments for missing context or confusion.',
      },
      {
        question: 'Is the audience engaged with the place, not only the aesthetic?',
        method:
          'Code comments for planning questions, local recommendations, criticism and greenwashing concerns.',
      },
      {
        question: 'Was the guide accurate, useful and respectful?',
        method:
          'Ask travellers and local contributors directly. A beautiful guide that misrepresents a place is not a success.',
      },
    ],
    risks: [
      {
        risk: 'Greenwashing or unverifiable sustainability claims.',
        mitigation:
          'Avoid absolute claims, explain the trade-offs, link to credible sources and say what the brand does not yet know.',
      },
      {
        risk: 'Inaccurate local or safety information.',
        mitigation:
          'Use local contributors and dated sources, avoid definitive safety or visa advice and update guides when conditions change.',
      },
      {
        risk: 'Over-tourism and cultural insensitivity.',
        mitigation:
          'Avoid “hidden gem” language that treats places as secrets, feature quieter seasons and consider residents’ experience in the brief.',
      },
      {
        risk: 'Seasonality and weather making evergreen content stale.',
        mitigation:
          'Date operational details, publish seasonal variants and keep a review calendar for every guide.',
      },
      {
        risk: 'Inspiration without inclusion.',
        mitigation:
          'Add cost ranges, accessibility notes and alternatives for different energy levels and travel styles.',
      },
    ],
    reflection:
      'Travel content often sells the feeling of a place while removing the place itself. The opportunity is to keep the beauty but add the useful truth: when to go, how to move, who benefits and what to skip. Responsible travel cannot be reduced to a green label. The more honest and specific the guide, the more trust it can earn — even when the answer is “it depends.”',
    nextSteps: [
      'Commission a small group of local contributors and agree a fair brief, credit and review process.',
      'Build a destination guide template with dated costs, transport notes, accessibility information and a “what we left out” slide.',
      'Create a source and fact-check log for every operational detail.',
      'Align the first social concepts with destination landing pages and a downloadable guide.',
      'Run a save-to-click review before expanding to new destinations.',
    ],
  },
]

export const projectSlugs = new Set(projects.map((project) => project.slug))

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
