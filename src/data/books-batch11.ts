import { Book } from '@/types/book';

export const booksBatch11: Book[] = [
  // ─────────────────────────────────────────────
  // 1. Finish
  // ─────────────────────────────────────────────
  {
    slug: `finish`,
    title: `Finish`,
    author: `Jon Acuff`,
    authorBio: `Jon Acuff is a New York Times bestselling author and speaker who helps people and organizations unlock their best work through humor and practical strategies.`,
    year: 2017,
    pages: 224,
    category: `Habits & Routines`,
    tags: [`finishing`, `perfectionism`, `goals`, `habits`, `productivity`],
    coverColor: `from-blue-400 to-blue-600`,
    coverEmoji: `🏁`,
    rating: 4.2,
    readingTime: `9 min read`,
    oneLiner: `A counter-intuitive guide to getting things done by letting go of perfectionism and embracing "good enough."`,
    keyTakeaways: [
      `Perfectionism is the biggest reason people abandon goals — cutting your goal in half doubles your chance of finishing it.`,
      `Strategic imperfection, choosing what you won't do perfectly, frees up energy for what actually matters.`,
      `Having fun along the way isn't a reward for finishing — it's the fuel that gets you there.`,
    ],
    summary: [
      `Finish challenges the conventional wisdom that starting is the hardest part of any goal. Acuff argues that finishing is far harder and that perfectionism is the invisible assassin of progress. Drawing on a research study of over eight hundred people, he reveals that the moment things get messy or fall behind schedule, most people quit entirely rather than adjust their expectations.`,
      `The book offers practical tactics like cutting your goal in half, choosing strategic imperfection, and removing secret rules you didn't know you were following. Acuff's tone is witty and self-deprecating, making the medicine of lowered expectations surprisingly easy to swallow.`,
    ],
    chapters: [
      { title: `The Day After Perfect`, summary: `Acuff explains why the day after you break your perfect streak is the most dangerous day for any goal — and how to survive it.` },
      { title: `Cut Your Goal in Half`, summary: `He presents research showing that people who halved their goal were 63% more successful than those who doubled their effort.` },
      { title: `Choose What to Bomb`, summary: `Strategic imperfection means deliberately deciding which areas of life will be "good enough" so you can finish what matters most.` },
    ],
    quotes: [
      { text: `The harder you try to be perfect, the less likely you'll be to finish.`, context: `On why perfectionism sabotages completion` },
      { text: `Developing tolerance for imperfection is the key factor in turning chronic starters into consistent finishers.`, context: `On the mindset shift needed to reach the finish line` },
    ],
    whoShouldRead: [
      `Chronic starters who have a graveyard of half-finished projects.`,
      `Perfectionists who struggle to ship anything unless it meets impossibly high standards.`,
      `Anyone who wants a humorous, research-backed approach to actually completing their goals.`,
    ],
    relatedBooks: [`atomic-habits`, `tiny-habits`, `compound-effect`, `getting-things-done`],
  },

  // ─────────────────────────────────────────────
  // 2. The Procrastination Equation
  // ─────────────────────────────────────────────
  {
    slug: `procrastination-equation`,
    title: `The Procrastination Equation`,
    author: `Piers Steel`,
    authorBio: `Piers Steel is a professor of organizational behavior and human resources at the University of Calgary and one of the world's leading researchers on procrastination.`,
    year: 2010,
    pages: 304,
    category: `Time Management`,
    tags: [`procrastination`, `motivation`, `science`, `behavior-change`, `time-management`],
    coverColor: `from-red-400 to-red-600`,
    coverEmoji: `📐`,
    rating: 4.1,
    readingTime: `11 min read`,
    oneLiner: `A scientific deep dive into why we procrastinate and a formula-driven approach to finally overcoming it.`,
    keyTakeaways: [
      `Procrastination follows a predictable equation: Motivation = (Expectancy × Value) / (Impulsiveness × Delay) — and you can hack each variable.`,
      `Increasing your confidence in success (expectancy) and making the task more enjoyable (value) are the two strongest levers against delay.`,
      `Environmental design — removing temptations and shortening deadlines — is more reliable than willpower alone.`,
    ],
    summary: [
      `The Procrastination Equation synthesizes decades of research into a single framework explaining why humans delay. Steel introduces a motivational formula and walks readers through each variable, showing how low confidence, boring tasks, impulsive tendencies, and distant deadlines conspire to keep us stuck.`,
      `What makes this book stand out from other procrastination guides is its rigor. Steel backs every claim with peer-reviewed studies while keeping the writing lively with humor and real-world examples. The final chapters offer a toolkit of evidence-based strategies for restructuring your environment, building confidence, and making meaningful work feel more immediate.`,
    ],
    chapters: [
      { title: `The Procrastination Equation`, summary: `Steel introduces his core formula and explains how each variable — expectancy, value, impulsiveness, and delay — drives or derails motivation.` },
      { title: `Your Procrastination Profile`, summary: `Readers learn to diagnose which part of the equation is their weakest link and why different people procrastinate for different reasons.` },
      { title: `The Motivation Toolkit`, summary: `Practical strategies for boosting each variable: building self-efficacy, gamifying tasks, pre-committing, and shrinking deadlines.` },
    ],
    quotes: [
      { text: `Procrastination is not a time-management problem — it is an emotion-management problem.`, context: `On the true root cause of chronic delay` },
      { text: `We are designed to live in the moment, which makes us terrible at working toward long-term rewards.`, context: `On the evolutionary basis of impulsiveness` },
    ],
    whoShouldRead: [
      `Chronic procrastinators who want to understand the science behind their behavior.`,
      `Managers and educators looking for evidence-based strategies to motivate others.`,
      `Anyone who has tried willpower-based approaches and found them insufficient.`,
    ],
    relatedBooks: [`atomic-habits`, `deep-work`, `getting-things-done`, `four-thousand-weeks`],
  },

  // ─────────────────────────────────────────────
  // 3. Eat Sleep Work Repeat
  // ─────────────────────────────────────────────
  {
    slug: `eat-sleep-work-repeat`,
    title: `Eat Sleep Work Repeat`,
    author: `Bruce Daisley`,
    authorBio: `Bruce Daisley is a former VP of Twitter for Europe and host of the top business podcast Eat Sleep Work Repeat, focused on making work better.`,
    year: 2020,
    pages: 304,
    category: `Time Management`,
    tags: [`workplace-culture`, `burnout`, `energy`, `breaks`, `engagement`],
    coverColor: `from-green-400 to-green-600`,
    coverEmoji: `🔄`,
    rating: 4.1,
    readingTime: `10 min read`,
    oneLiner: `Thirty science-backed changes to transform your work day from draining to energizing.`,
    keyTakeaways: [
      `Buzz — a sense of energy and engagement at work — is the single best predictor of team performance, and it can be engineered.`,
      `Taking regular breaks and protecting lunch hours dramatically boosts afternoon creativity and focus.`,
      `Open-plan offices and back-to-back meetings are productivity killers; designing quiet time is essential.`,
    ],
    summary: [
      `Eat Sleep Work Repeat distills research from psychology, neuroscience, and organizational behavior into thirty actionable fixes for the modern workday. Daisley argues that most workplaces are accidentally designed to drain energy and stifle creativity, and that small structural changes can reverse the damage.`,
      `From reintroducing lunch breaks to limiting meetings to forty-five minutes, the book offers a practical playbook for anyone who feels overworked but under-productive. Daisley writes with the clarity and warmth of a great podcast host, making the science accessible and the advice immediately actionable.`,
    ],
    chapters: [
      { title: `Recharge`, summary: `Daisley explains why rest, breaks, and sleep are not luxuries but prerequisites for sustained high performance at work.` },
      { title: `Sync`, summary: `He explores how social connection, laughter, and shared rituals create the buzz that makes teams thrive.` },
      { title: `Buzz`, summary: `The book concludes with strategies for building energizing work environments, from meeting hygiene to office design.` },
    ],
    quotes: [
      { text: `The way we're working isn't working — and the evidence has been hiding in plain sight.`, context: `On the mismatch between modern work culture and human biology` },
      { text: `Lunch isn't a luxury. It's the single biggest performance intervention available to any worker.`, context: `On the underrated power of a proper break` },
    ],
    whoShouldRead: [
      `Managers and leaders who want to improve team morale and performance.`,
      `Knowledge workers feeling burned out by the modern open-plan, always-on work culture.`,
      `Anyone looking for quick, evidence-based wins to make their workday more enjoyable.`,
    ],
    relatedBooks: [`make-time`, `deep-work`, `essentialism`, `four-thousand-weeks`],
  },

  // ─────────────────────────────────────────────
  // 4. Do Nothing
  // ─────────────────────────────────────────────
  {
    slug: `do-nothing`,
    title: `Do Nothing`,
    author: `Celeste Headlee`,
    authorBio: `Celeste Headlee is an award-winning journalist, public radio host, and author whose TED Talk on conversation has been viewed over thirty million times.`,
    year: 2020,
    pages: 272,
    category: `Time Management`,
    tags: [`rest`, `overwork`, `culture`, `leisure`, `busyness`],
    coverColor: `from-teal-300 to-teal-500`,
    coverEmoji: `🛋️`,
    rating: 4.2,
    readingTime: `10 min read`,
    oneLiner: `A manifesto against the cult of busyness, arguing that true productivity requires learning to do less.`,
    keyTakeaways: [
      `The modern obsession with productivity is a cultural invention — not a biological necessity — rooted in Industrial Revolution–era thinking.`,
      `Idleness and unstructured leisure are essential for creativity, problem solving, and mental health.`,
      `Setting firm boundaries between work and rest is not laziness; it is the foundation of sustainable performance.`,
    ],
    summary: [
      `Do Nothing traces the history of how humans went from working far fewer hours than we do today to glorifying busyness as a moral virtue. Headlee argues that our addiction to productivity is making us less effective, less creative, and less happy, and that the solution is counterintuitive: do less.`,
      `The book combines historical research, neuroscience, and personal reflection to make the case for reclaiming leisure, social connection, and genuine rest. Headlee offers practical steps for resisting hustle culture without sacrificing career success.`,
    ],
    chapters: [
      { title: `The Cult of Efficiency`, summary: `Headlee traces how Industrial Revolution ideals turned rest into a sin and busyness into a badge of honor.` },
      { title: `The Science of Idleness`, summary: `She presents research showing that downtime activates the brain's default mode network, which is essential for creativity and insight.` },
      { title: `Reclaiming Leisure`, summary: `Practical strategies for setting boundaries, protecting unstructured time, and rediscovering the lost art of doing nothing.` },
    ],
    quotes: [
      { text: `We have confused efficiency with effectiveness, and busyness with importance.`, context: `On the modern misunderstanding of productivity` },
      { text: `Rest is not a reward for work. Rest is the foundation that makes good work possible.`, context: `On the essential role of downtime` },
    ],
    whoShouldRead: [
      `Overworked professionals who feel guilty whenever they stop being productive.`,
      `Anyone interested in the cultural history of work and leisure.`,
      `Leaders who want to build healthier, more sustainable team cultures.`,
    ],
    relatedBooks: [`four-thousand-weeks`, `essentialism`, `make-time`, `deep-work`],
  },

  // ─────────────────────────────────────────────
  // 5. The Lazy Genius Way
  // ─────────────────────────────────────────────
  {
    slug: `lazy-genius`,
    title: `The Lazy Genius Way`,
    author: `Kendra Adachi`,
    authorBio: `Kendra Adachi is the host of The Lazy Genius Podcast and a bestselling author who helps people be geniuses about what matters and lazy about what doesn't.`,
    year: 2020,
    pages: 240,
    category: `Time Management`,
    tags: [`simplicity`, `priorities`, `systems`, `intentional-living`, `balance`],
    coverColor: `from-pink-300 to-pink-500`,
    coverEmoji: `🧠`,
    rating: 4.3,
    readingTime: `9 min read`,
    oneLiner: `Thirteen principles for being a genius about the things that matter to you and lazy about everything else.`,
    keyTakeaways: [
      `You don't need a system for everything — you need the right system for what actually matters to you.`,
      `Deciding once (batch decisions) eliminates daily decision fatigue and frees mental energy for creative work.`,
      `Starting small and building around what you care about is more sustainable than optimizing everything at once.`,
    ],
    summary: [
      `The Lazy Genius Way rejects the all-or-nothing approach to productivity. Adachi argues that you can either be a genius about everything and burn out, or be lazy about everything and feel guilty — or you can be a Lazy Genius and focus your energy only on what truly matters to you.`,
      `Through thirteen practical principles — like "decide once," "start small," and "build the right routine" — Adachi gives readers permission to let go of perfection in low-priority areas so they can invest fully in what they love. The tone is warm, relatable, and refreshingly anti-hustle.`,
    ],
    chapters: [
      { title: `Decide Once`, summary: `Adachi explains how making a single decision about recurring tasks — like meals or outfits — eliminates hundreds of micro-decisions per week.` },
      { title: `Start Small`, summary: `She advocates for tiny first steps rather than elaborate systems, arguing that momentum matters more than magnitude.` },
      { title: `Live in the Season`, summary: `A reminder that priorities shift with life stages, and the best system is one that adapts to your current season.` },
    ],
    quotes: [
      { text: `You can't be a genius about everything, but you can be a genius about the things that matter most.`, context: `On the core philosophy of selective optimization` },
      { text: `The goal is not to get more done. The goal is to have what you do matter.`, context: `On redefining productivity around personal values` },
    ],
    whoShouldRead: [
      `People overwhelmed by traditional productivity systems that try to optimize everything.`,
      `Parents and caregivers who need practical, flexible approaches to managing daily life.`,
      `Anyone who wants permission to care deeply about some things and let go of the rest.`,
    ],
    relatedBooks: [`essentialism`, `atomic-habits`, `make-time`, `getting-things-done`],
  },

  // ─────────────────────────────────────────────
  // 6. Getting Results the Agile Way
  // ─────────────────────────────────────────────
  {
    slug: `getting-results-agile-way`,
    title: `Getting Results the Agile Way`,
    author: `J.D. Meier`,
    authorBio: `J.D. Meier is a Director at Microsoft and creator of the Agile Results personal productivity system used by teams and individuals worldwide.`,
    year: 2010,
    pages: 272,
    category: `Time Management`,
    tags: [`agile`, `results`, `weekly-reviews`, `time-management`, `systems`],
    coverColor: `from-blue-400 to-blue-600`,
    coverEmoji: `🏃`,
    rating: 4.0,
    readingTime: `10 min read`,
    oneLiner: `A lightweight personal productivity system built on choosing three outcomes per day, week, and year.`,
    keyTakeaways: [
      `The "Rule of 3" — picking just three outcomes for your day, week, and year — creates focus without rigid planning.`,
      `Monday Vision, Daily Outcomes, Friday Reflection is a simple weekly rhythm that keeps you aligned with what matters.`,
      `Energy management is as important as time management; match your hardest work to your peak energy hours.`,
    ],
    summary: [
      `Getting Results the Agile Way introduces a personal productivity framework inspired by agile software development. At its core is the Rule of 3: each day, identify three things you want to accomplish; each week, pick three wins to target; each year, choose three major outcomes. This simplicity is the system's strength.`,
      `Meier also incorporates energy management, time-boxing, and weekly reflection cycles. The book is structured as a reference you can dip into rather than read cover to cover, making it practical for busy professionals who want a flexible system without heavy overhead.`,
    ],
    chapters: [
      { title: `Monday Vision, Daily Outcomes`, summary: `Meier introduces the weekly rhythm: envision your week on Monday, set three daily outcomes, and reflect on Friday.` },
      { title: `The Rule of 3`, summary: `He explains why limiting yourself to three priorities per time horizon creates clarity and reduces overwhelm.` },
      { title: `Energy and Time`, summary: `Strategies for mapping your energy cycles and scheduling demanding work during peak performance windows.` },
    ],
    quotes: [
      { text: `Instead of trying to get everything done, focus on getting the right things done.`, context: `On the power of selective focus over exhaustive task lists` },
      { text: `Spend your best energy on your best results.`, context: `On aligning peak performance hours with high-impact work` },
    ],
    whoShouldRead: [
      `Knowledge workers who want a lightweight system without the overhead of GTD or other complex frameworks.`,
      `Managers and team leads looking for a simple method to align weekly priorities.`,
      `Anyone who feels overwhelmed by enormous to-do lists and wants a cleaner approach.`,
    ],
    relatedBooks: [`getting-things-done`, `essentialism`, `make-time`, `seven-habits`],
  },

  // ─────────────────────────────────────────────
  // 7. 168 Hours
  // ─────────────────────────────────────────────
  {
    slug: `168-hours`,
    title: `168 Hours`,
    author: `Laura Vanderkam`,
    authorBio: `Laura Vanderkam is a time-management expert and author of multiple bestsellers on how successful people structure their days and weeks.`,
    year: 2010,
    pages: 272,
    category: `Time Management`,
    tags: [`time-audit`, `priorities`, `core-competencies`, `scheduling`, `work-life-balance`],
    coverColor: `from-purple-400 to-purple-600`,
    coverEmoji: `⏰`,
    rating: 4.1,
    readingTime: `10 min read`,
    oneLiner: `You have more time than you think — 168 hours a week — and this book shows you how to spend them on what matters.`,
    keyTakeaways: [
      `A time audit reveals that most people dramatically overestimate how much they work and underestimate their available leisure time.`,
      `Focusing on your "core competencies" — the things only you can do well — and outsourcing or eliminating the rest multiplies your impact.`,
      `Filling time with meaningful activities first (not squeezing them in around the edges) is the secret to feeling time-rich.`,
    ],
    summary: [
      `168 Hours argues that the common complaint of "not having enough time" is usually a statement of priorities, not a reflection of reality. Vanderkam walks readers through a time-tracking exercise that reveals surprising gaps between perceived and actual time use, then offers a framework for reallocating those hours.`,
      `The book encourages readers to focus on their core competencies at work, invest in relationships and health, and stop spending time on tasks that could be delegated or dropped. Vanderkam blends data, interviews with high achievers, and practical exercises into an optimistic guide for anyone who wants to reclaim their week.`,
    ],
    chapters: [
      { title: `The Time Audit`, summary: `Vanderkam guides readers through tracking every half-hour for a week to expose the gap between perception and reality.` },
      { title: `Core Competencies`, summary: `She introduces the idea of treating your life like a business — investing in strengths and outsourcing weaknesses.` },
      { title: `Filling the Bucket`, summary: `Strategies for scheduling meaningful activities first and letting less important things fill the remaining space.` },
    ],
    quotes: [
      { text: `Instead of saying "I don't have time," try saying "It's not a priority" — and see how that changes the conversation.`, context: `On the language of time and priorities` },
      { text: `We have 168 hours in a week. That is a lot of time. The key is to fill it with the right things.`, context: `On the abundance of time when used intentionally` },
    ],
    whoShouldRead: [
      `People who constantly feel time-starved and want a reality check.`,
      `Professionals looking for a structured method to reallocate their weekly hours.`,
      `Anyone interested in the overlap between time management and life design.`,
    ],
    relatedBooks: [`make-time`, `essentialism`, `four-thousand-weeks`, `getting-things-done`],
  },

  // ─────────────────────────────────────────────
  // 8. Off the Clock
  // ─────────────────────────────────────────────
  {
    slug: `off-the-clock`,
    title: `Off the Clock`,
    author: `Laura Vanderkam`,
    authorBio: `Laura Vanderkam is a time-management author and speaker known for her data-driven approach to helping people feel less busy and more fulfilled.`,
    year: 2018,
    pages: 256,
    category: `Time Management`,
    tags: [`time-perception`, `mindfulness`, `scheduling`, `memory`, `intentional-living`],
    coverColor: `from-blue-300 to-blue-500`,
    coverEmoji: `🕊️`,
    rating: 4.2,
    readingTime: `9 min read`,
    oneLiner: `A guide to feeling less busy by changing how you perceive and remember time rather than just how you schedule it.`,
    keyTakeaways: [
      `Time perception matters more than time management — you can have the same schedule and feel either rushed or relaxed depending on your mindset.`,
      `Creating memorable experiences stretches your subjective sense of time, making life feel longer and richer.`,
      `Planning ahead paradoxically creates more spontaneity by reducing the mental load of figuring things out in the moment.`,
    ],
    summary: [
      `Off the Clock explores the subjective side of time. Vanderkam studied the time diaries of over nine hundred people and found that those who felt the most time-rich shared specific habits: they invested in memorable experiences, lingered on pleasant moments, and planned their days with intention.`,
      `The book blends time-diary data with insights from psychology and neuroscience to show that feeling less busy is not about doing less but about paying attention differently. Practical tips include adventure batching, savoring rituals, and planning weeks on Friday afternoons.`,
    ],
    chapters: [
      { title: `Tend Your Garden`, summary: `Vanderkam shows how planning your time in advance actually increases spontaneity by clearing mental space.` },
      { title: `Linger`, summary: `She explains how savoring pleasant moments — even small ones — stretches your subjective experience of time.` },
      { title: `Make Life Memorable`, summary: `Creating novel, adventurous experiences makes time feel longer in retrospect, counteracting the "where did the year go?" effect.` },
    ],
    quotes: [
      { text: `People who feel like they have the most time are not people who have the most free hours — they are people who pay attention to the good ones.`, context: `On the difference between objective and subjective time` },
      { text: `A day with one memorable moment feels longer than a day with none.`, context: `On why novelty stretches time perception` },
    ],
    whoShouldRead: [
      `Anyone who feels like time is slipping away despite having a reasonable schedule.`,
      `People interested in the psychology of time perception and memory.`,
      `Readers who enjoyed 168 Hours and want to go deeper into the subjective side of time.`,
    ],
    relatedBooks: [`four-thousand-weeks`, `make-time`, `essentialism`, `atomic-habits`],
  },

  // ─────────────────────────────────────────────
  // 9. Tranquility by Tuesday
  // ─────────────────────────────────────────────
  {
    slug: `tranquility-by-tuesday`,
    title: `Tranquility by Tuesday`,
    author: `Laura Vanderkam`,
    authorBio: `Laura Vanderkam is a time-management researcher and bestselling author who studies how busy people build satisfying lives.`,
    year: 2022,
    pages: 256,
    category: `Time Management`,
    tags: [`rules`, `time-management`, `scheduling`, `routines`, `work-life-balance`],
    coverColor: `from-teal-400 to-teal-600`,
    coverEmoji: `🌙`,
    rating: 4.3,
    readingTime: `9 min read`,
    oneLiner: `Nine rules for structuring your week so you feel calm, productive, and in control by Tuesday.`,
    keyTakeaways: [
      `Nine simple scheduling rules — like "give yourself a bedtime" and "one big adventure, one little adventure per week" — create a reliable sense of calm.`,
      `Planning your week on Friday afternoon (not Sunday night) reduces weekend anxiety and sets you up for a strong Monday.`,
      `Batching small tasks into designated windows prevents them from fragmenting your most productive hours.`,
    ],
    summary: [
      `Tranquility by Tuesday is built on a study Vanderkam ran with 150 busy people who implemented nine time-management rules over nine weeks. The results showed consistent improvements in time satisfaction, productivity, and well-being. Each rule is simple enough to adopt in a single week.`,
      `The book walks through rules like scheduling three weekly priorities, creating an evening "shutdown" ritual, and building in weekly adventures. Vanderkam backs each with data from her study and real-life stories, making this her most practical and actionable book yet.`,
    ],
    chapters: [
      { title: `The Three-Priority Rule`, summary: `Vanderkam shows how choosing three priorities each week creates focus without the overwhelm of a massive to-do list.` },
      { title: `Give Yourself a Bedtime`, summary: `A consistent bedtime anchors your entire day, improves sleep quality, and creates a reliable evening routine.` },
      { title: `One Big Adventure, One Little Adventure`, summary: `Planning one major and one minor adventure each week ensures memorable moments and prevents weeks from blurring together.` },
    ],
    quotes: [
      { text: `A good week doesn't just happen. It's designed — and the design doesn't have to be complicated.`, context: `On intentional weekly planning` },
      { text: `Friday planning turns Sunday dread into Monday confidence.`, context: `On shifting your planning window to the end of the workweek` },
    ],
    whoShouldRead: [
      `Busy professionals who want a simple, tested set of rules for structuring their week.`,
      `Parents and caregivers who need practical strategies for balancing competing demands.`,
      `Fans of Laura Vanderkam who want her most research-backed playbook.`,
    ],
    relatedBooks: [`make-time`, `four-thousand-weeks`, `essentialism`, `atomic-habits`],
  },

  // ─────────────────────────────────────────────
  // 10. Overwhelmed
  // ─────────────────────────────────────────────
  {
    slug: `overwhelmed`,
    title: `Overwhelmed`,
    author: `Brigid Schulte`,
    authorBio: `Brigid Schulte is a Pulitzer Prize–winning journalist and director of the Better Life Lab at New America, focusing on work, family, and time policy.`,
    year: 2014,
    pages: 368,
    category: `Time Management`,
    tags: [`overwork`, `leisure`, `gender`, `policy`, `work-life-balance`],
    coverColor: `from-orange-400 to-orange-600`,
    coverEmoji: `😵`,
    rating: 4.0,
    readingTime: `12 min read`,
    oneLiner: `An investigation into why modern life feels so crushingly busy — and what individuals, employers, and governments can do about it.`,
    keyTakeaways: [
      `"Time confetti" — leisure shredded into tiny, unsatisfying fragments — is the real reason we feel time-poor, not a lack of total hours.`,
      `Workplace culture, gender norms, and public policy are structural forces that keep people overwhelmed beyond any individual fix.`,
      `Reclaiming true leisure (not just screen time) requires both personal boundaries and systemic change.`,
    ],
    summary: [
      `Overwhelmed combines investigative journalism with personal memoir as Schulte explores why Americans — especially working mothers — feel so crushed for time. She introduces the concept of "time confetti," the idea that our leisure is shredded into tiny, unsatisfying fragments rather than existing in restorative blocks.`,
      `Schulte travels to Denmark, interviews time researchers, and experiments with her own schedule to find solutions. The book is both a structural critique of modern work culture and a practical guide, offering strategies from better workplace policies to individual time-management tactics.`,
    ],
    chapters: [
      { title: `Time Confetti`, summary: `Schulte explains how modern life shreds leisure into tiny, unsatisfying scraps and why this makes us feel perpetually overwhelmed.` },
      { title: `The Ideal Worker, the Ideal Mother`, summary: `She examines how cultural expectations create impossible standards that leave both genders exhausted and guilty.` },
      { title: `Toward Time Serenity`, summary: `Practical and policy-level solutions for reclaiming blocks of meaningful leisure and reducing structural overwhelm.` },
    ],
    quotes: [
      { text: `Our leisure has been chopped into confetti — and confetti is not the same as a slice of cake.`, context: `On why small fragments of free time fail to restore us` },
      { text: `Being busy is not a badge of honor. It is a sign that something is broken.`, context: `On the cultural glorification of overwork` },
    ],
    whoShouldRead: [
      `Working parents who feel trapped between career ambition and family demands.`,
      `Policy makers and leaders interested in structural solutions to time poverty.`,
      `Anyone who wants to understand why modern busyness feels so uniquely crushing.`,
    ],
    relatedBooks: [`four-thousand-weeks`, `essentialism`, `make-time`, `deep-work`],
  },

  // ─────────────────────────────────────────────
  // 11. Time Smart
  // ─────────────────────────────────────────────
  {
    slug: `time-smart`,
    title: `Time Smart`,
    author: `Ashley Whillans`,
    authorBio: `Ashley Whillans is a Harvard Business School professor whose research focuses on time, money, and happiness.`,
    year: 2020,
    pages: 256,
    category: `Time Management`,
    tags: [`time-affluence`, `happiness`, `decisions`, `trade-offs`, `wellbeing`],
    coverColor: `from-cyan-400 to-cyan-600`,
    coverEmoji: `🧠`,
    rating: 4.1,
    readingTime: `9 min read`,
    oneLiner: `Research-backed strategies for valuing time over money — the single most reliable path to greater happiness.`,
    keyTakeaways: [
      `People who prioritize time over money are consistently happier, yet most of us make decisions that trade time for dollars.`,
      `"Time traps" — like long commutes for higher pay — systematically erode wellbeing in ways we underestimate.`,
      `Buying back time through outsourcing chores and saying no to low-value commitments is one of the highest-ROI happiness investments.`,
    ],
    summary: [
      `Time Smart presents Whillans's research showing that the feeling of having enough time — time affluence — is a stronger predictor of happiness than income. She identifies common "time traps" that lead people to sacrifice hours for marginal financial gains and offers a framework for making better trade-offs.`,
      `The book provides concrete tools: a time-affluence quiz, strategies for reframing decisions around time rather than money, and tips for overcoming the psychological biases that keep us time-poor. It is compact, actionable, and grounded in rigorous academic research.`,
    ],
    chapters: [
      { title: `The Time Trap`, summary: `Whillans reveals how cultural norms and cognitive biases push us into decisions that systematically sacrifice time for money.` },
      { title: `The Time-Affluence Quiz`, summary: `A diagnostic tool to assess your own relationship with time and identify where your biggest gains lie.` },
      { title: `Buying Time`, summary: `Practical advice on outsourcing, saying no, and restructuring your life to maximize time affluence.` },
    ],
    quotes: [
      { text: `People who value time over money are happier — yet most of us keep choosing money.`, context: `On the central paradox of modern life` },
      { text: `The richest person is not the one with the most money but the one with the most time.`, context: `On redefining wealth around time affluence` },
    ],
    whoShouldRead: [
      `Professionals wrestling with trade-offs between higher pay and more free time.`,
      `Anyone interested in the science of happiness and how time perception shapes wellbeing.`,
      `Managers who want to design time-friendly policies that boost employee satisfaction.`,
    ],
    relatedBooks: [`four-thousand-weeks`, `essentialism`, `psychology-of-money`, `make-time`],
  },

  // ─────────────────────────────────────────────
  // 12. Slow Productivity
  // ─────────────────────────────────────────────
  {
    slug: `slow-productivity`,
    title: `Slow Productivity`,
    author: `Cal Newport`,
    authorBio: `Cal Newport is a Georgetown computer science professor and bestselling author known for championing deep work and digital minimalism.`,
    year: 2024,
    pages: 256,
    category: `Focus & Deep Work`,
    tags: [`slow-productivity`, `deep-work`, `quality`, `sustainability`, `focus`],
    coverColor: `from-stone-400 to-stone-600`,
    coverEmoji: `🐌`,
    rating: 4.3,
    readingTime: `10 min read`,
    oneLiner: `A philosophy of sustainable achievement built on doing fewer things, working at a natural pace, and obsessing over quality.`,
    keyTakeaways: [
      `Do fewer things — reducing your active projects to a vital few lets you give each one the attention it deserves.`,
      `Work at a natural pace — seasonal variation and deliberate rest are not obstacles to productivity but essential components of it.`,
      `Obsess over quality — producing something truly excellent is more rewarding and impactful than churning out mediocre work faster.`,
    ],
    summary: [
      `Slow Productivity is Newport's antidote to the frantic pace of modern knowledge work. He argues that the pseudo-productivity of visible busyness has replaced meaningful output, and offers three principles to counter it: do fewer things, work at a natural pace, and obsess over quality.`,
      `Drawing on examples from historical figures like Newton, Austen, and Jewel, Newport shows that great work has always been produced slowly and deliberately. The book provides practical strategies for reducing project overload, embracing seasonal rhythms, and investing in craft rather than speed.`,
    ],
    chapters: [
      { title: `Do Fewer Things`, summary: `Newport makes the case for radically limiting your active commitments so each one receives deep attention.` },
      { title: `Work at a Natural Pace`, summary: `He argues that sustainable productivity follows seasonal rhythms — periods of intensity balanced by genuine rest.` },
      { title: `Obsess Over Quality`, summary: `Focusing on craft and excellence creates work that compounds in value and reputation over time.` },
    ],
    quotes: [
      { text: `Busyness is a proxy for productivity in the absence of better metrics — and it's a terrible one.`, context: `On why knowledge work confuses activity with achievement` },
      { text: `The great minds of history didn't hustle — they worked slowly, deliberately, and with obsessive care.`, context: `On the historical evidence for slow productivity` },
    ],
    whoShouldRead: [
      `Knowledge workers drowning in tasks who want a principled way to do less but better.`,
      `Fans of Deep Work who want Newport's updated thinking on sustainable productivity.`,
      `Anyone tired of hustle culture and looking for a calmer, more intentional approach.`,
    ],
    relatedBooks: [`deep-work`, `essentialism`, `four-thousand-weeks`, `make-time`],
  },

  // ─────────────────────────────────────────────
  // 13. A World Without Email
  // ─────────────────────────────────────────────
  {
    slug: `world-without-email`,
    title: `A World Without Email`,
    author: `Cal Newport`,
    authorBio: `Cal Newport is a computer science professor and bestselling author who advocates for focused, intentional work in a distracted world.`,
    year: 2021,
    pages: 320,
    category: `Focus & Deep Work`,
    tags: [`email`, `workflows`, `communication`, `knowledge-work`, `collaboration`],
    coverColor: `from-blue-400 to-blue-600`,
    coverEmoji: `📧`,
    rating: 4.1,
    readingTime: `11 min read`,
    oneLiner: `A blueprint for replacing the hyperactive hive mind of constant email with structured workflows that protect deep thinking.`,
    keyTakeaways: [
      `The "hyperactive hive mind" — unstructured, constant back-and-forth messaging — is the single biggest drag on knowledge-worker productivity.`,
      `Replacing ad-hoc email threads with structured workflows (shared boards, office hours, status meetings) dramatically reduces context switching.`,
      `Email is not the problem — the absence of intentional communication protocols is.`,
    ],
    summary: [
      `A World Without Email diagnoses the core dysfunction of modern knowledge work: the hyperactive hive mind, a workflow where everything is coordinated through unstructured, real-time messaging. Newport argues this approach is fundamentally incompatible with the deep thinking that creates value.`,
      `The book proposes replacing the hive mind with structured communication protocols — task boards, scheduled check-ins, and clear process ownership. Newport draws on case studies from companies that have successfully reduced email volume while increasing output and employee satisfaction.`,
    ],
    chapters: [
      { title: `The Hyperactive Hive Mind`, summary: `Newport defines the default workflow of modern offices — constant, unstructured messaging — and explains why it devastates cognitive performance.` },
      { title: `Attention Capital`, summary: `He introduces the concept of attention capital: the idea that an organization's most valuable resource is its workers' focused attention, not their availability.` },
      { title: `Protocols and Processes`, summary: `Practical blueprints for replacing ad-hoc email with structured workflows like task boards, office hours, and client-facing portals.` },
    ],
    quotes: [
      { text: `Email didn't create a productivity problem — it revealed an absence of workflow thinking.`, context: `On why email is a symptom, not the disease` },
      { text: `Every time you check your inbox, you pay a cognitive tax that lingers for minutes after you look away.`, context: `On the attention residue cost of email` },
    ],
    whoShouldRead: [
      `Managers and leaders who want to reduce email overload across their teams.`,
      `Knowledge workers who spend more time messaging than doing actual work.`,
      `Anyone interested in the organizational design of productive workplaces.`,
    ],
    relatedBooks: [`deep-work`, `make-time`, `getting-things-done`, `essentialism`],
  },

  // ─────────────────────────────────────────────
  // 14. The Organized Mind
  // ─────────────────────────────────────────────
  {
    slug: `organized-mind`,
    title: `The Organized Mind`,
    author: `Daniel Levitin`,
    authorBio: `Daniel Levitin is a neuroscientist, cognitive psychologist, and bestselling author known for bridging brain science and everyday life.`,
    year: 2014,
    pages: 528,
    category: `Focus & Deep Work`,
    tags: [`neuroscience`, `information-overload`, `decision-making`, `organization`, `cognitive-science`],
    coverColor: `from-blue-500 to-blue-700`,
    coverEmoji: `🗂️`,
    rating: 4.2,
    readingTime: `14 min read`,
    oneLiner: `A neuroscientist's guide to thriving in the age of information overload by working with your brain instead of against it.`,
    keyTakeaways: [
      `Your brain's attentional system was not designed for the modern information flood — externalizing decisions and information is essential.`,
      `Organizing your physical and digital environments reduces cognitive load and frees your mind for creative thinking.`,
      `Understanding how your brain categorizes, prioritizes, and forgets helps you design systems that compensate for its natural limitations.`,
    ],
    summary: [
      `The Organized Mind explores how the human brain processes, sorts, and manages the avalanche of information we face daily. Levitin draws on neuroscience research to explain why we lose our keys, forget appointments, and feel overwhelmed — and what organizational strategies align with how our brains actually work.`,
      `The book covers everything from filing systems and to-do lists to medical decision-making and business organization. Levitin argues that the secret to thriving in the information age is not to process more but to offload strategically — using external systems as extensions of your limited cognitive resources.`,
    ],
    chapters: [
      { title: `The Attentional System`, summary: `Levitin explains the brain's two attention modes — focused and daydreaming — and why both are essential for productivity and creativity.` },
      { title: `Externalizing Memory`, summary: `He shows why writing things down, using filing systems, and creating physical cues dramatically outperform trying to remember everything.` },
      { title: `Organizing Decision Making`, summary: `Strategies for making better decisions by understanding cognitive biases, base rates, and the neuroscience of choice.` },
    ],
    quotes: [
      { text: `The most fundamental principle of the organized mind is to shift the burden of organizing from our brains to the external world.`, context: `On the power of externalization` },
      { text: `Our brains are configured to make a certain number of decisions per day, and once we reach that limit, we can't make any more.`, context: `On decision fatigue and cognitive limits` },
    ],
    whoShouldRead: [
      `Anyone feeling overwhelmed by information overload who wants neuroscience-backed strategies.`,
      `Knowledge workers who want to understand why their current systems fail and how to fix them.`,
      `Readers who enjoy books that bridge science and practical self-improvement.`,
    ],
    relatedBooks: [`deep-work`, `getting-things-done`, `atomic-habits`, `make-time`],
  },

  // ─────────────────────────────────────────────
  // 15. The Information Diet
  // ─────────────────────────────────────────────
  {
    slug: `information-diet`,
    title: `The Information Diet`,
    author: `Clay Johnson`,
    authorBio: `Clay Johnson is a technologist, author, and former director of Sunlight Labs who advocates for conscious information consumption.`,
    year: 2012,
    pages: 160,
    category: `Focus & Deep Work`,
    tags: [`information-overload`, `digital-minimalism`, `media`, `attention`, `habits`],
    coverColor: `from-green-400 to-green-600`,
    coverEmoji: `📵`,
    rating: 4.0,
    readingTime: `8 min read`,
    oneLiner: `A case for consuming information as intentionally as you consume food — less junk, more substance.`,
    keyTakeaways: [
      `Information overconsumption is as harmful as overeating — both lead to poor health, impaired judgment, and reduced productivity.`,
      `Just as you'd choose whole foods over junk food, you should choose primary sources and deep analysis over clickbait and outrage.`,
      `Setting strict information consumption schedules (and sticking to them) is the equivalent of a healthy diet for your mind.`,
    ],
    summary: [
      `The Information Diet draws a provocative parallel between food consumption and information consumption. Johnson argues that our media environment is engineered to feed us addictive, low-quality content — the informational equivalent of junk food — and that the result is a society of obese minds.`,
      `The book prescribes a deliberate "diet" of high-quality, primary-source information consumed in scheduled blocks. Johnson offers practical tools for auditing your information intake, setting up consumption routines, and building the discipline to ignore the noise.`,
    ],
    chapters: [
      { title: `Information Obesity`, summary: `Johnson draws the parallel between food and information, arguing that overconsumption of low-quality media is a public health crisis.` },
      { title: `The Attention Fitness Plan`, summary: `He introduces a structured approach to consuming information intentionally, including time blocks and source selection criteria.` },
      { title: `A Healthy Information Diet`, summary: `Practical strategies for auditing your media diet, eliminating junk information, and building sustainable consumption habits.` },
    ],
    quotes: [
      { text: `Just as junk food can lead to obesity, junk information can lead to ignorance.`, context: `On the parallel between food and information consumption` },
      { text: `Seek information. Not affirmation.`, context: `On choosing substance over comfort in your media diet` },
    ],
    whoShouldRead: [
      `Anyone who feels overwhelmed by the constant flood of news, social media, and notifications.`,
      `People who want a structured approach to reducing screen time without going cold turkey.`,
      `Professionals who recognize that information overload is undermining their focus and judgment.`,
    ],
    relatedBooks: [`deep-work`, `make-time`, `essentialism`, `atomic-habits`],
  },

  // ─────────────────────────────────────────────
  // 16. Brief
  // ─────────────────────────────────────────────
  {
    slug: `brief`,
    title: `Brief`,
    author: `Joseph McCormack`,
    authorBio: `Joseph McCormack is the founder of the BRIEF Lab and an expert on concise communication who consults with military leaders and Fortune 500 companies.`,
    year: 2014,
    pages: 256,
    category: `Communication & Influence`,
    tags: [`brevity`, `communication`, `clarity`, `presentations`, `writing`],
    coverColor: `from-orange-400 to-orange-600`,
    coverEmoji: `📝`,
    rating: 4.1,
    readingTime: `9 min read`,
    oneLiner: `A practical guide to saying less and communicating more — because brevity is the soul of impact.`,
    keyTakeaways: [
      `In an attention-starved world, the ability to be brief is a competitive advantage — long-winded communicators lose their audience.`,
      `The BRIEF method (Background, Reason, Information, End, Follow-up) structures any message for maximum clarity in minimum time.`,
      `Preparation is the key to brevity; being concise requires more thought, not less.`,
    ],
    summary: [
      `Brief tackles the epidemic of long-windedness in business communication. McCormack argues that information overload has made attention the scarcest resource, and that professionals who can communicate clearly in half the time will win in every setting — meetings, emails, presentations, and pitches.`,
      `The book introduces the BRIEF framework and other tools for trimming messages to their essence without losing meaning. McCormack draws on examples from the military, media, and business to show that brevity is not about dumbing things down — it's about respecting your audience's time and attention.`,
    ],
    chapters: [
      { title: `Why Brevity Matters`, summary: `McCormack presents the business case for brevity: shorter messages get read, remembered, and acted upon.` },
      { title: `The BRIEF Method`, summary: `He introduces a five-part framework for structuring any communication — from emails to boardroom presentations — for maximum conciseness.` },
      { title: `Narrative Mapping`, summary: `A visual tool for organizing ideas before communicating, ensuring every word earns its place.` },
    ],
    quotes: [
      { text: `Brevity is not about being short. It is about being clear.`, context: `On the true meaning of concise communication` },
      { text: `If you can't explain it briefly, you don't understand it well enough.`, context: `On the relationship between clarity of thought and clarity of speech` },
    ],
    whoShouldRead: [
      `Professionals who deliver presentations, write reports, or lead meetings and want to be more impactful.`,
      `Managers who want their teams to communicate more efficiently.`,
      `Anyone who has been told they are "too wordy" and wants a framework for improvement.`,
    ],
    relatedBooks: [`getting-things-done`, `deep-work`, `seven-habits`, `essentialism`],
  },

  // ─────────────────────────────────────────────
  // 17. Smart Brevity
  // ─────────────────────────────────────────────
  {
    slug: `smart-brevity`,
    title: `Smart Brevity`,
    author: `Jim VandeHei`,
    authorBio: `Jim VandeHei is the co-founder and CEO of Axios and a pioneer of the concise, scannable news format that changed modern media.`,
    year: 2022,
    pages: 224,
    category: `Communication & Influence`,
    tags: [`writing`, `brevity`, `communication`, `media`, `clarity`],
    coverColor: `from-yellow-400 to-yellow-600`,
    coverEmoji: `⚡`,
    rating: 4.2,
    readingTime: `8 min read`,
    oneLiner: `The Axios playbook for writing clearly, concisely, and in a way that actually gets read.`,
    keyTakeaways: [
      `Most professional writing is too long — readers skim, so structure your message for skimmers and you'll reach everyone.`,
      `Lead with the single most important thing (the "why it matters"), then add context only as needed.`,
      `Bold formatting, bullet points, and short paragraphs are not lazy — they are respectful of your reader's time.`,
    ],
    summary: [
      `Smart Brevity codifies the writing style that made Axios one of the most-read news sources in the world. VandeHei and his co-authors argue that most workplace communication fails because it is too long, too unfocused, and structured for the writer rather than the reader.`,
      `The book offers a repeatable formula: grab attention with a strong opener, state why it matters, provide essential details in scannable format, and stop. It applies this framework to emails, memos, presentations, and social media, making it a versatile communication toolkit.`,
    ],
    chapters: [
      { title: `Why It Matters`, summary: `The authors explain why brevity is the most overlooked communication skill and how it builds trust with audiences.` },
      { title: `The Smart Brevity Formula`, summary: `A step-by-step writing framework: attention-grabbing headline, "why it matters" statement, scannable details, and a clear end.` },
      { title: `Applying Smart Brevity`, summary: `Real-world examples of transforming bloated emails, memos, and presentations into concise, high-impact communications.` },
    ],
    quotes: [
      { text: `If you think about it, every audience everywhere — at work, at home, online — is begging you to get to the point.`, context: `On respecting your audience's attention` },
      { text: `Be worthy of your reader's time. They'll reward you with their attention.`, context: `On the reciprocal nature of concise communication` },
    ],
    whoShouldRead: [
      `Anyone who writes emails, memos, or reports as part of their job and wants them to actually be read.`,
      `Leaders who need to communicate strategy clearly to large teams.`,
      `Content creators and marketers looking for a proven formula for engaging writing.`,
    ],
    relatedBooks: [`deep-work`, `essentialism`, `seven-habits`, `getting-things-done`],
  },

  // ─────────────────────────────────────────────
  // 18. Exactly What to Say
  // ─────────────────────────────────────────────
  {
    slug: `exactly-what-to-say`,
    title: `Exactly What to Say`,
    author: `Phil Jones`,
    authorBio: `Phil M. Jones is a sales trainer and author who has delivered over 2,500 presentations in 57 countries on the art of persuasive communication.`,
    year: 2017,
    pages: 148,
    category: `Communication & Influence`,
    tags: [`persuasion`, `sales`, `influence`, `language`, `scripts`],
    coverColor: `from-red-400 to-red-600`,
    coverEmoji: `💬`,
    rating: 4.1,
    readingTime: `8 min read`,
    oneLiner: `A pocket guide to the exact words and phrases that open minds, influence decisions, and get people to say yes.`,
    keyTakeaways: [
      `Specific "magic words" — like "just imagine" and "how would you feel if" — trigger psychological responses that lower resistance and open minds.`,
      `Asking the right question at the right moment is more powerful than any amount of persuasion or argument.`,
      `The words you use in the first seconds of a conversation determine whether people lean in or shut down.`,
    ],
    summary: [
      `Exactly What to Say is a compact collection of conversational frameworks and phrases that Jones has refined over decades of sales training. Each chapter introduces a specific "magic phrase" — like "I'm not sure if it's for you, but..." or "What do you know about..." — and explains the psychology behind why it works.`,
      `Despite its sales origins, the book applies broadly to negotiations, management conversations, and everyday influence. Jones keeps each chapter short and actionable, making this a reference book you can flip through before any important conversation.`,
    ],
    chapters: [
      { title: `Opening Minds`, summary: `Jones introduces phrases designed to lower psychological resistance and create openness to new ideas.` },
      { title: `Guiding Decisions`, summary: `He shares language patterns that help people move from indecision to action without feeling pressured.` },
      { title: `Closing Conversations`, summary: `Phrases for gracefully moving conversations toward commitment while maintaining trust and rapport.` },
    ],
    quotes: [
      { text: `The words you use in the first few seconds of a conversation determine what happens in the rest of it.`, context: `On the outsized impact of opening words` },
      { text: `Most people lost the sale before they ever started selling — they lost it in the words they chose.`, context: `On how language shapes outcomes` },
    ],
    whoShouldRead: [
      `Salespeople and entrepreneurs who want proven language patterns for conversations.`,
      `Managers who need to have difficult conversations and want practical scripts.`,
      `Anyone who wants to be more persuasive without being manipulative.`,
    ],
    relatedBooks: [`seven-habits`, `power-of-habit`, `atomic-habits`, `compound-effect`],
  },

  // ─────────────────────────────────────────────
  // 19. The Power of a Positive No
  // ─────────────────────────────────────────────
  {
    slug: `power-of-no`,
    title: `The Power of a Positive No`,
    author: `William Ury`,
    authorBio: `William Ury is a world-renowned negotiation expert, co-founder of the Harvard Program on Negotiation, and co-author of Getting to Yes.`,
    year: 2007,
    pages: 272,
    category: `Communication & Influence`,
    tags: [`negotiation`, `boundaries`, `assertiveness`, `conflict`, `communication`],
    coverColor: `from-green-500 to-green-700`,
    coverEmoji: `✋`,
    rating: 4.2,
    readingTime: `10 min read`,
    oneLiner: `A three-step method for saying no assertively without damaging relationships — Yes! No. Yes?`,
    keyTakeaways: [
      `The "Positive No" follows a Yes-No-Yes structure: affirm your deeper interest (Yes!), set a clear boundary (No.), then offer a constructive alternative (Yes?).`,
      `Most people either accommodate (say yes when they mean no) or attack (say no aggressively) — both damage relationships and outcomes.`,
      `A well-delivered No actually strengthens relationships by establishing respect and clarity.`,
    ],
    summary: [
      `The Power of a Positive No teaches a negotiation framework for one of life's most important skills: saying no without burning bridges. Ury argues that the inability to say no leads to resentment, overcommitment, and broken boundaries, while aggressive refusals damage relationships.`,
      `His solution is the Positive No: a three-part structure that begins with affirming your underlying interest, delivers a firm and clear boundary, and ends with an invitation to find a better path forward. The book is filled with examples from business, diplomacy, and personal life.`,
    ],
    chapters: [
      { title: `The Yes Behind Your No`, summary: `Ury explains how identifying what you're saying yes to — your core interest — gives your no power and conviction.` },
      { title: `Delivering the No`, summary: `Techniques for setting boundaries firmly but respectfully, without apology or aggression.` },
      { title: `The Yes After the No`, summary: `How to end with a constructive proposal that keeps the relationship intact and opens the door to better solutions.` },
    ],
    quotes: [
      { text: `A No uttered from the deepest conviction is better than a Yes merely uttered to please, or worse, to avoid trouble.`, context: `On the moral importance of honest boundaries` },
      { text: `The secret to saying No without destroying the relationship is to sandwich it between two Yeses.`, context: `On the Yes-No-Yes structure` },
    ],
    whoShouldRead: [
      `People pleasers who struggle to set boundaries without guilt.`,
      `Professionals who need to decline requests from bosses, clients, or colleagues diplomatically.`,
      `Anyone interested in practical negotiation techniques for everyday life.`,
    ],
    relatedBooks: [`seven-habits`, `essentialism`, `getting-things-done`, `deep-work`],
  },

  // ─────────────────────────────────────────────
  // 20. The 5 Second Rule
  // ─────────────────────────────────────────────
  {
    slug: `5-second-rule`,
    title: `The 5 Second Rule`,
    author: `Mel Robbins`,
    authorBio: `Mel Robbins is one of the most-booked motivational speakers in America and creator of the viral 5-4-3-2-1 countdown technique.`,
    year: 2017,
    pages: 240,
    category: `Habits & Routines`,
    tags: [`motivation`, `action`, `courage`, `habits`, `mindset`],
    coverColor: `from-red-500 to-red-700`,
    coverEmoji: `5️⃣`,
    rating: 4.2,
    readingTime: `9 min read`,
    oneLiner: `Count 5-4-3-2-1 and move — a deceptively simple technique for overriding hesitation and taking action.`,
    keyTakeaways: [
      `When you feel the impulse to act on a goal, you must physically move within five seconds or your brain will kill the impulse.`,
      `The 5-4-3-2-1 countdown interrupts the habit loop of hesitation and activates the prefrontal cortex for deliberate action.`,
      `Courage is not a personality trait — it is a daily practice of pushing through micro-moments of fear and doubt.`,
    ],
    summary: [
      `The 5 Second Rule introduces a single, powerful technique: when you have an instinct to act on a goal, count 5-4-3-2-1 and physically move before your brain can talk you out of it. Robbins discovered this method during a personal crisis and has since applied it to everything from getting out of bed to speaking up in meetings.`,
      `Robbins backs the rule with neuroscience, explaining how the countdown interrupts habitual thought patterns and activates the prefrontal cortex. The book is packed with reader stories and practical applications, making it an energizing read for anyone stuck in analysis paralysis.`,
    ],
    chapters: [
      { title: `The Discovery`, summary: `Robbins shares how she stumbled on the 5 Second Rule during a difficult period and how it transformed her daily habits.` },
      { title: `The Science of Courage`, summary: `She explains the neuroscience behind why counting down works — it interrupts the brain's default patterns and activates decision-making circuits.` },
      { title: `Everyday Courage`, summary: `Stories and strategies for applying the rule to health, relationships, work, and personal growth.` },
    ],
    quotes: [
      { text: `You aren't going to feel like it. You're never going to feel like it. So just count 5-4-3-2-1 and go.`, context: `On why waiting for motivation is a losing strategy` },
      { text: `Courage is a birthright. It is inside each of us. And it is accessible in five seconds flat.`, context: `On making courage a practice rather than a personality trait` },
    ],
    whoShouldRead: [
      `Chronic overthinkers who struggle to take the first step.`,
      `Anyone who wants a simple, actionable tool for building daily courage.`,
      `People who have read plenty of self-help books but need a kick to actually start implementing.`,
    ],
    relatedBooks: [`atomic-habits`, `tiny-habits`, `compound-effect`, `miracle-morning`],
  },

  // ─────────────────────────────────────────────
  // 21. The High 5 Habit
  // ─────────────────────────────────────────────
  {
    slug: `high-5-habit`,
    title: `The High 5 Habit`,
    author: `Mel Robbins`,
    authorBio: `Mel Robbins is a bestselling author, podcast host, and motivational speaker known for translating neuroscience into simple daily practices.`,
    year: 2021,
    pages: 288,
    category: `Habits & Routines`,
    tags: [`self-encouragement`, `confidence`, `habits`, `mindset`, `morning-routine`],
    coverColor: `from-yellow-400 to-yellow-600`,
    coverEmoji: `✋`,
    rating: 4.0,
    readingTime: `9 min read`,
    oneLiner: `Start every morning by high-fiving yourself in the mirror to rewire your brain for self-encouragement and confidence.`,
    keyTakeaways: [
      `High-fiving your reflection in the mirror each morning leverages the brain's association between high fives and celebration to build self-worth.`,
      `Most people are better at encouraging others than themselves — the High 5 Habit closes that gap.`,
      `Consistent self-encouragement creates a positive feedback loop that improves motivation, resilience, and mood over time.`,
    ],
    summary: [
      `The High 5 Habit introduces a morning ritual so simple it sounds silly: look in the mirror and give yourself a high five. Robbins argues that this gesture taps into deep neural associations between high fives, celebration, and encouragement, gradually rewiring your self-image.`,
      `The book extends beyond the mirror ritual into a broader framework for replacing self-criticism with self-encouragement. Robbins draws on neuroscience, personal stories, and reader testimonials to make the case that how you treat yourself in small daily moments shapes everything else.`,
    ],
    chapters: [
      { title: `The Mirror`, summary: `Robbins introduces the High 5 Habit and explains the neuroscience of why physical gestures of encouragement reprogram your self-image.` },
      { title: `The RAS Filter`, summary: `She explains how the reticular activating system filters reality based on your beliefs — and how the habit shifts that filter toward positivity.` },
      { title: `High-Fiving Your Life`, summary: `Extending the principle beyond the mirror to create a lifestyle of self-encouragement, resilience, and daily celebration.` },
    ],
    quotes: [
      { text: `You can't hate yourself into a better life. You have to encourage yourself into one.`, context: `On replacing self-criticism with self-encouragement` },
      { text: `The most important relationship you'll ever have is the one with yourself — and it starts every morning in the mirror.`, context: `On why self-image begins with daily rituals` },
    ],
    whoShouldRead: [
      `People who are harder on themselves than they are on anyone else.`,
      `Anyone looking for a simple morning ritual to boost confidence and mood.`,
      `Fans of The 5 Second Rule who want another accessible, science-backed daily practice.`,
    ],
    relatedBooks: [`atomic-habits`, `miracle-morning`, `tiny-habits`, `compound-effect`],
  },

  // ─────────────────────────────────────────────
  // 22. One Small Step Can Change Your Life
  // ─────────────────────────────────────────────
  {
    slug: `one-small-step`,
    title: `One Small Step Can Change Your Life`,
    author: `Robert Maurer`,
    authorBio: `Robert Maurer is a clinical psychologist on the faculty of UCLA and a consultant who applies the Japanese concept of kaizen to personal and organizational change.`,
    year: 2004,
    pages: 240,
    category: `Habits & Routines`,
    tags: [`kaizen`, `small-steps`, `change`, `fear`, `habits`],
    coverColor: `from-green-300 to-green-500`,
    coverEmoji: `👣`,
    rating: 4.3,
    readingTime: `9 min read`,
    oneLiner: `The Japanese philosophy of kaizen applied to personal change — ridiculously small steps that bypass fear and build unstoppable momentum.`,
    keyTakeaways: [
      `Big goals trigger the amygdala's fear response; tiny steps bypass it entirely, making change feel safe and achievable.`,
      `Asking yourself small questions — like "What is one tiny thing I could do today?" — activates the brain's creative problem-solving circuits.`,
      `Kaizen works because it builds momentum without resistance — small wins compound into transformative change.`,
    ],
    summary: [
      `One Small Step Can Change Your Life applies the Japanese philosophy of kaizen — continuous improvement through tiny steps — to personal growth. Maurer argues that grand resolutions fail because they trigger the brain's fear circuits, while laughably small actions fly under the radar and create real change.`,
      `The book provides six kaizen strategies: asking small questions, thinking small thoughts, taking small actions, solving small problems, giving small rewards, and identifying small moments. Maurer draws on clinical case studies and neuroscience to show why this gentle approach often succeeds where dramatic efforts fail.`,
    ],
    chapters: [
      { title: `Why Small Steps Work`, summary: `Maurer explains how the brain's fear response sabotages big changes and why tiny steps bypass it entirely.` },
      { title: `Ask Small Questions`, summary: `The practice of asking yourself tiny, non-threatening questions to activate creativity and lower resistance to change.` },
      { title: `Take Small Actions`, summary: `Real-world examples of how absurdly small actions — like marching in place for one minute — lead to lasting transformation.` },
    ],
    quotes: [
      { text: `Small steps bypass the brain's built-in resistance to new behavior.`, context: `On the neuroscience behind kaizen` },
      { text: `When you improve a little each day, eventually big things occur.`, context: `On the compounding power of tiny consistent improvements` },
    ],
    whoShouldRead: [
      `People who have tried and failed with dramatic New Year's resolutions.`,
      `Anyone paralyzed by the size of a goal they want to achieve.`,
      `Therapists, coaches, and managers who help others navigate change.`,
    ],
    relatedBooks: [`atomic-habits`, `tiny-habits`, `compound-effect`, `power-of-habit`],
  },

  // ─────────────────────────────────────────────
  // 23. Mini Habits
  // ─────────────────────────────────────────────
  {
    slug: `mini-habits`,
    title: `Mini Habits`,
    author: `Stephen Guise`,
    authorBio: `Stephen Guise is an author and blogger who popularized the concept of mini habits — absurdly small daily commitments that create lasting change.`,
    year: 2013,
    pages: 128,
    category: `Habits & Routines`,
    tags: [`mini-habits`, `willpower`, `small-steps`, `consistency`, `behavior-change`],
    coverColor: `from-blue-300 to-blue-500`,
    coverEmoji: `🤏`,
    rating: 4.2,
    readingTime: `8 min read`,
    oneLiner: `Commit to absurdly small daily actions — like one push-up or one sentence — and watch them snowball into lasting habits.`,
    keyTakeaways: [
      `A mini habit is so small it's impossible to fail — one push-up, one page, one minute of meditation — which removes all willpower barriers.`,
      `Willpower is a limited resource; mini habits require so little of it that you always have enough to start.`,
      `Once you start (the hardest part), you almost always do more than the minimum — but the minimum is always enough.`,
    ],
    summary: [
      `Mini Habits proposes a radically simple approach to behavior change: commit to doing an absurdly small version of the habit you want to build. Instead of fifty push-ups, commit to one. Instead of writing two thousand words, commit to fifty. The idea is that the tiny commitment eliminates resistance and almost always leads to more.`,
      `Guise backs this approach with research on willpower depletion, habit formation, and motivation. The book is short and practical, reflecting its own philosophy — it gives you exactly what you need and nothing more.`,
    ],
    chapters: [
      { title: `The Mini Habit Concept`, summary: `Guise introduces the idea of committing to absurdly small daily actions and explains why this approach outperforms ambitious goals.` },
      { title: `Willpower and Motivation`, summary: `He reviews the science of willpower depletion and shows why mini habits sidestep the problem entirely.` },
      { title: `Building Your Mini Habits`, summary: `A step-by-step guide to choosing, implementing, and tracking your own mini habits for lasting change.` },
    ],
    quotes: [
      { text: `When you make your habit small enough, willpower becomes irrelevant.`, context: `On why tiny commitments remove the barrier to action` },
      { text: `One push-up can change your life — not because of the push-up, but because of what it starts.`, context: `On how small actions create momentum for bigger change` },
    ],
    whoShouldRead: [
      `Serial habit-failers who struggle with willpower and consistency.`,
      `Anyone who wants a dead-simple system for building new habits with zero overwhelm.`,
      `People who prefer a short, practical read over lengthy self-help books.`,
    ],
    relatedBooks: [`atomic-habits`, `tiny-habits`, `compound-effect`, `power-of-habit`],
  },

  // ─────────────────────────────────────────────
  // 24. Better Than Before
  // ─────────────────────────────────────────────
  {
    slug: `better-than-before`,
    title: `Better Than Before`,
    author: `Gretchen Rubin`,
    authorBio: `Gretchen Rubin is a bestselling author and host of the Happier podcast, known for her practical frameworks for habits, happiness, and human nature.`,
    year: 2015,
    pages: 320,
    category: `Habits & Routines`,
    tags: [`habits`, `tendencies`, `self-knowledge`, `strategies`, `personality`],
    coverColor: `from-pink-400 to-pink-600`,
    coverEmoji: `📈`,
    rating: 4.2,
    readingTime: `11 min read`,
    oneLiner: `A guide to understanding your own nature so you can choose the habit strategies that actually work for you.`,
    keyTakeaways: [
      `There is no one-size-fits-all approach to habits — the right strategy depends on your personality tendency (Upholder, Questioner, Obliger, or Rebel).`,
      `Monitoring (tracking what you do) is one of the most universally effective habit strategies regardless of personality type.`,
      `The "Strategy of Convenience" shows that the easier you make a habit, the more likely it sticks — and vice versa for bad habits.`,
    ],
    summary: [
      `Better Than Before explores the many strategies available for changing habits and argues that the key is matching the strategy to your personality. Rubin introduces her Four Tendencies framework (fully developed in a later book) and shows how Upholders, Questioners, Obligers, and Rebels each respond differently to habit-forming techniques.`,
      `The book catalogs over twenty strategies — from scheduling and monitoring to pairing and treating — and helps readers identify which ones align with their nature. Rubin's writing is personal and anecdotal, making abstract behavioral science feel relatable and immediately applicable.`,
    ],
    chapters: [
      { title: `Know Yourself`, summary: `Rubin argues that self-knowledge is the foundation of habit change and introduces the Four Tendencies as a starting point.` },
      { title: `The Strategies`, summary: `An overview of key habit strategies — scheduling, monitoring, accountability, pairing, treating — and when each works best.` },
      { title: `Making It Stick`, summary: `Advanced tactics for maintaining habits long-term, including how to handle disruptions, travel, and life transitions.` },
    ],
    quotes: [
      { text: `The key to habits isn't self-control — it's self-knowledge.`, context: `On why understanding your personality is more important than willpower` },
      { text: `What you do every day matters more than what you do once in a while.`, context: `On the compounding power of daily habits` },
    ],
    whoShouldRead: [
      `People who have tried multiple habit systems and found that none quite fit.`,
      `Anyone curious about how personality shapes the best approach to behavior change.`,
      `Readers who enjoy Gretchen Rubin's personal, anecdotal writing style.`,
    ],
    relatedBooks: [`atomic-habits`, `power-of-habit`, `tiny-habits`, `seven-habits`],
  },

  // ─────────────────────────────────────────────
  // 25. The Happiness Project
  // ─────────────────────────────────────────────
  {
    slug: `happiness-project`,
    title: `The Happiness Project`,
    author: `Gretchen Rubin`,
    authorBio: `Gretchen Rubin is a bestselling author who spent a year test-driving every happiness strategy she could find and wrote about the results.`,
    year: 2009,
    pages: 336,
    category: `Personal Development`,
    tags: [`happiness`, `experiments`, `self-improvement`, `routines`, `relationships`],
    coverColor: `from-yellow-300 to-yellow-500`,
    coverEmoji: `😊`,
    rating: 4.1,
    readingTime: `11 min read`,
    oneLiner: `One woman's year-long experiment in applying every happiness research finding to her ordinary life — with surprisingly practical results.`,
    keyTakeaways: [
      `You don't need a dramatic life change to be happier — small, targeted adjustments in daily routines create outsized improvements in wellbeing.`,
      `Tackling energy drains first (clutter, nagging tasks, poor sleep) creates the foundation for everything else.`,
      `The days are long but the years are short — paying attention to everyday moments matters more than chasing peak experiences.`,
    ],
    summary: [
      `The Happiness Project chronicles Rubin's twelve-month experiment with happiness, dedicating each month to a different theme: energy, marriage, work, play, mindfulness, and more. She applies research from psychology and philosophy to her everyday life and reports honestly on what worked and what didn't.`,
      `The book's charm lies in its ordinariness — Rubin is not in crisis, just quietly dissatisfied. Her experiment shows that happiness is less about grand gestures and more about hundreds of small daily choices. It is a relatable, inspiring blueprint for anyone who wants to be happier without upending their life.`,
    ],
    chapters: [
      { title: `Boost Energy`, summary: `Rubin starts by tackling the fundamentals — sleep, exercise, and decluttering — to build a foundation for happiness.` },
      { title: `Aim Higher`, summary: `She experiments with challenging herself at work, finding that engagement and flow contribute more to happiness than comfort.` },
      { title: `Be Serious About Play`, summary: `Rubin rediscovers the importance of leisure, hobbies, and fun — things adults often dismiss as frivolous.` },
    ],
    quotes: [
      { text: `The days are long, but the years are short.`, context: `On the paradox of time passing slowly in the moment but quickly in retrospect` },
      { text: `One of the best ways to make yourself happy is to make other people happy. One of the best ways to make other people happy is to be happy yourself.`, context: `On the virtuous cycle of happiness` },
    ],
    whoShouldRead: [
      `Anyone who feels "fine" but suspects they could be happier with some intentional effort.`,
      `Readers who enjoy memoir-style self-improvement books grounded in research.`,
      `People looking for small, practical changes rather than dramatic life overhauls.`,
    ],
    relatedBooks: [`atomic-habits`, `seven-habits`, `power-of-habit`, `four-thousand-weeks`],
  },

  // ─────────────────────────────────────────────
  // 26. The Four Tendencies
  // ─────────────────────────────────────────────
  {
    slug: `four-tendencies`,
    title: `The Four Tendencies`,
    author: `Gretchen Rubin`,
    authorBio: `Gretchen Rubin is a bestselling author and habit researcher best known for her Four Tendencies personality framework.`,
    year: 2017,
    pages: 272,
    category: `Mindset & Psychology`,
    tags: [`personality`, `tendencies`, `expectations`, `motivation`, `self-knowledge`],
    coverColor: `from-blue-400 to-purple-500`,
    coverEmoji: `🔲`,
    rating: 4.2,
    readingTime: `10 min read`,
    oneLiner: `A personality framework based on how you respond to expectations — inner and outer — that explains why habits stick for some and not others.`,
    keyTakeaways: [
      `Everyone falls into one of four tendencies — Upholder, Questioner, Obliger, or Rebel — based on how they respond to inner and outer expectations.`,
      `Obligers (the largest group) meet outer expectations but struggle with inner ones, making external accountability their key to habit success.`,
      `Knowing your tendency and those of people around you transforms communication, management, and relationships.`,
    ],
    summary: [
      `The Four Tendencies expands on a framework Rubin first introduced in Better Than Before. The core insight is that people differ fundamentally in how they respond to expectations: Upholders meet both inner and outer; Questioners meet inner but resist outer; Obligers meet outer but struggle with inner; Rebels resist both.`,
      `Understanding your tendency explains why certain productivity strategies work brilliantly for some and fail for others. Rubin provides detailed profiles of each tendency with practical advice for leveraging strengths and managing weaknesses, making this an invaluable tool for self-understanding and managing others.`,
    ],
    chapters: [
      { title: `The Framework`, summary: `Rubin introduces the two-axis model of inner and outer expectations and the four tendencies that emerge from it.` },
      { title: `Deep Dives`, summary: `Detailed profiles of each tendency — strengths, weaknesses, communication tips, and the traps each tendency falls into.` },
      { title: `Practical Applications`, summary: `How to use the framework in parenting, management, healthcare, and personal habit formation.` },
    ],
    quotes: [
      { text: `When we understand how people respond to expectations, we can set them up for success — including ourselves.`, context: `On the practical value of the framework` },
      { text: `There's no one right way to change a habit — there's the right way for you.`, context: `On why self-knowledge trumps one-size-fits-all advice` },
    ],
    whoShouldRead: [
      `Anyone frustrated by habit advice that "should" work but doesn't for them.`,
      `Managers and leaders who want to motivate diverse team members more effectively.`,
      `People interested in personality frameworks that are practical rather than academic.`,
    ],
    relatedBooks: [`atomic-habits`, `power-of-habit`, `seven-habits`, `tiny-habits`],
  },

  // ─────────────────────────────────────────────
  // 27. Outer Order, Inner Calm
  // ─────────────────────────────────────────────
  {
    slug: `outer-order`,
    title: `Outer Order, Inner Calm`,
    author: `Gretchen Rubin`,
    authorBio: `Gretchen Rubin is a bestselling habits and happiness author who explores how external environments shape internal wellbeing.`,
    year: 2019,
    pages: 224,
    category: `Habits & Routines`,
    tags: [`decluttering`, `organization`, `calm`, `simplicity`, `environment`],
    coverColor: `from-white to-gray-200`,
    coverEmoji: `🏠`,
    rating: 4.0,
    readingTime: `8 min read`,
    oneLiner: `A short, practical guide to decluttering your physical space as a path to mental clarity and calm.`,
    keyTakeaways: [
      `External order creates internal calm — clearing your physical environment reduces cognitive load and stress.`,
      `You don't have to become a minimalist; you just need to make your space reflect your priorities and values.`,
      `The best time to declutter is now; waiting for the perfect system or the right mood is a trap.`,
    ],
    summary: [
      `Outer Order, Inner Calm is a concise, practical guide to creating an organized physical environment. Rubin argues that clutter is not just a visual annoyance but a psychological drain that saps energy, focus, and peace of mind. Clearing it creates a disproportionate sense of control and calm.`,
      `The book is organized as a collection of tips, principles, and prompts rather than a linear narrative, making it easy to dip into at any point. Rubin acknowledges that different personalities need different approaches and offers strategies for various decluttering styles.`,
    ],
    chapters: [
      { title: `Why Outer Order Matters`, summary: `Rubin explains the psychological research linking physical environments to mental states and why clutter drains energy.` },
      { title: `Strategies for Clearing Clutter`, summary: `Practical techniques for deciding what to keep, what to toss, and how to prevent clutter from returning.` },
      { title: `Maintaining Order`, summary: `Systems and habits for keeping your space organized without turning maintenance into a full-time job.` },
    ],
    quotes: [
      { text: `For most people, outer order contributes to inner calm.`, context: `On the link between physical environment and mental peace` },
      { text: `Clutter is not just the stuff on the floor. It is anything that stands between you and the life you want to be living.`, context: `On a broader definition of clutter` },
    ],
    whoShouldRead: [
      `Anyone who feels stressed by their physical environment but overwhelmed by the idea of a full Marie Kondo overhaul.`,
      `People who want quick, practical decluttering tips rather than a philosophical treatise.`,
      `Readers who enjoy Gretchen Rubin's approachable, non-judgmental style.`,
    ],
    relatedBooks: [`atomic-habits`, `essentialism`, `make-time`, `getting-things-done`],
  },

  // ─────────────────────────────────────────────
  // 28. Habit Stacking
  // ─────────────────────────────────────────────
  {
    slug: `habit-stacking`,
    title: `Habit Stacking`,
    author: `S.J. Scott`,
    authorBio: `S.J. Scott is a prolific author of habit-building books who focuses on simple, actionable systems for personal development.`,
    year: 2014,
    pages: 178,
    category: `Habits & Routines`,
    tags: [`habit-stacking`, `routines`, `small-wins`, `systems`, `consistency`],
    coverColor: `from-green-400 to-green-600`,
    coverEmoji: `📚`,
    rating: 4.0,
    readingTime: `8 min read`,
    oneLiner: `Build powerful routines by linking small habits together into a single unbreakable chain.`,
    keyTakeaways: [
      `Habit stacking — linking new habits to existing ones in a sequence — leverages the momentum of routine to make new behaviors stick.`,
      `Each habit in the stack should take five to fifteen minutes, keeping the barrier to entry low and completion rate high.`,
      `A well-designed morning or evening stack can pack a dozen positive habits into under an hour.`,
    ],
    summary: [
      `Habit Stacking introduces a simple concept: instead of trying to build individual habits in isolation, chain them together into a sequence anchored by an existing routine. The "after I do X, I will do Y" structure uses the completion of one habit as the trigger for the next.`,
      `Scott provides dozens of example stacks for morning routines, productivity, health, and personal development. The book is short and practical, designed to be implemented immediately rather than studied at length.`,
    ],
    chapters: [
      { title: `The Habit Stacking Concept`, summary: `Scott explains why linking habits into chains is more effective than trying to build each one independently.` },
      { title: `Building Your Stack`, summary: `A step-by-step process for selecting, ordering, and timing the habits in your personal stack.` },
      { title: `Example Stacks`, summary: `Ready-made stacks for morning routines, fitness, mindfulness, and productivity that readers can adopt or customize.` },
    ],
    quotes: [
      { text: `You don't need more motivation. You need a better system — and a chain of habits is the simplest system there is.`, context: `On why structure beats willpower` },
      { text: `Small habits, stacked together, create a routine more powerful than any single grand gesture.`, context: `On the compounding effect of linked habits` },
    ],
    whoShouldRead: [
      `People who want a structured morning or evening routine but struggle to build one.`,
      `Anyone who finds isolated habit-building too fragile and wants a more resilient approach.`,
      `Readers who prefer short, actionable books they can implement in a single weekend.`,
    ],
    relatedBooks: [`atomic-habits`, `tiny-habits`, `compound-effect`, `power-of-habit`],
  },

  // ─────────────────────────────────────────────
  // 29. The Power of Less
  // ─────────────────────────────────────────────
  {
    slug: `power-of-less`,
    title: `The Power of Less`,
    author: `Leo Babauta`,
    authorBio: `Leo Babauta is the creator of Zen Habits, one of the most popular simplicity and productivity blogs in the world.`,
    year: 2008,
    pages: 192,
    category: `Focus & Deep Work`,
    tags: [`minimalism`, `simplicity`, `focus`, `essentialism`, `less-is-more`],
    coverColor: `from-white to-gray-300`,
    coverEmoji: `✨`,
    rating: 4.1,
    readingTime: `8 min read`,
    oneLiner: `A minimalist approach to productivity — do less, focus on what matters, and achieve more with fewer commitments.`,
    keyTakeaways: [
      `Limiting yourself to one goal and three Most Important Tasks per day creates extraordinary focus.`,
      `Simplifying your commitments, possessions, and inputs is itself a form of productivity.`,
      `The power of constraints — fewer projects, shorter deadlines, smaller goals — forces creativity and prioritization.`,
    ],
    summary: [
      `The Power of Less distills Babauta's Zen Habits philosophy into a short, practical guide. The core idea is radical simplification: instead of doing more, do less but with total focus. Babauta prescribes choosing one goal at a time, identifying three Most Important Tasks each morning, and ruthlessly eliminating everything else.`,
      `The book covers email management, project simplification, fitness, and personal organization — all through the lens of doing less. It is spare, calming, and refreshingly direct, practicing the very minimalism it preaches.`,
    ],
    chapters: [
      { title: `The Art of Limitation`, summary: `Babauta argues that setting limits — on goals, tasks, and commitments — is the most powerful productivity technique available.` },
      { title: `Most Important Tasks`, summary: `He introduces the MIT system: choose three essential tasks each morning and do them first, before anything else.` },
      { title: `Simple Productivity`, summary: `Practical applications for simplifying email, projects, routines, and even your physical space.` },
    ],
    quotes: [
      { text: `Do less. Not nothing — just less. And do it with complete focus and attention.`, context: `On the core philosophy of radical simplification` },
      { text: `The secret to getting ahead is getting started — on fewer things.`, context: `On why focus on one goal outperforms juggling many` },
    ],
    whoShouldRead: [
      `Overwhelmed professionals who want a calmer, more focused approach to work.`,
      `Fans of minimalism and essentialism who want a practical productivity system.`,
      `Anyone who feels that doing more has only led to feeling more stressed.`,
    ],
    relatedBooks: [`essentialism`, `deep-work`, `make-time`, `getting-things-done`],
  },

  // ─────────────────────────────────────────────
  // 30. Zen To Done
  // ─────────────────────────────────────────────
  {
    slug: `zen-to-done`,
    title: `Zen To Done`,
    author: `Leo Babauta`,
    authorBio: `Leo Babauta is the creator of Zen Habits and a minimalist productivity writer who simplifies complex systems into their essential elements.`,
    year: 2008,
    pages: 102,
    category: `Time Management`,
    tags: [`gtd`, `simplicity`, `habits`, `productivity-system`, `minimalism`],
    coverColor: `from-green-300 to-green-500`,
    coverEmoji: `☯️`,
    rating: 4.0,
    readingTime: `8 min read`,
    oneLiner: `A simplified, habit-based alternative to Getting Things Done that focuses on doing rather than organizing.`,
    keyTakeaways: [
      `ZTD distills productivity into ten essential habits — and you only need to adopt them one at a time.`,
      `The biggest flaw of GTD is that it's a complex system adopted all at once; ZTD fixes this by focusing on gradual habit formation.`,
      `Capture, process, plan, do, and review — in their simplest forms — are all you need for a functional productivity system.`,
    ],
    summary: [
      `Zen To Done (ZTD) is Babauta's streamlined response to David Allen's Getting Things Done. He loved GTD's ideas but found the system too complex to implement all at once, so he stripped it down to ten essential habits and encouraged readers to adopt them one at a time over several months.`,
      `The result is a gentler, more sustainable approach to personal productivity. ZTD keeps GTD's best ideas — capture, weekly review, next actions — while removing the overhead and adding structure around habit formation. At just over a hundred pages, it practices the minimalism it preaches.`,
    ],
    chapters: [
      { title: `The 10 Habits of ZTD`, summary: `Babauta introduces the ten habits — from capture and process to simplify and find your passion — and recommends adopting one per month.` },
      { title: `Minimal ZTD`, summary: `A stripped-down version with just four essential habits for people who want the simplest possible system.` },
      { title: `From GTD to ZTD`, summary: `A comparison showing what ZTD borrows from GTD, what it changes, and why the habit-based approach is more sustainable.` },
    ],
    quotes: [
      { text: `The problem isn't the system — it's trying to adopt the entire system at once instead of building it habit by habit.`, context: `On why GTD fails for many people` },
      { text: `Simplify until only the essential remains. Then do the essential with full focus.`, context: `On the minimalist core of ZTD` },
    ],
    whoShouldRead: [
      `GTD fans who struggled to implement the full system and want a simpler alternative.`,
      `People who prefer building productivity habits gradually rather than adopting a complex framework.`,
      `Minimalists who want a productivity system that matches their philosophy.`,
    ],
    relatedBooks: [`getting-things-done`, `essentialism`, `atomic-habits`, `make-time`],
  },

  // ─────────────────────────────────────────────
  // 31. The Life-Changing Magic of Tidying Up
  // ─────────────────────────────────────────────
  {
    slug: `life-changing-magic`,
    title: `The Life-Changing Magic of Tidying Up`,
    author: `Marie Kondo`,
    authorBio: `Marie Kondo is a Japanese organizing consultant and author whose KonMari Method has sparked a global decluttering movement.`,
    year: 2014,
    pages: 224,
    category: `Habits & Routines`,
    tags: [`tidying`, `decluttering`, `minimalism`, `joy`, `organization`],
    coverColor: `from-white to-pink-100`,
    coverEmoji: `✨`,
    rating: 4.3,
    readingTime: `9 min read`,
    oneLiner: `Keep only what sparks joy — a revolutionary tidying method that transforms your home and your relationship with possessions.`,
    keyTakeaways: [
      `The question "Does this spark joy?" is a reliable physical and emotional test for deciding what to keep and what to release.`,
      `Tidying by category (not by room) and in a specific order — clothes, books, papers, miscellaneous, sentimental — prevents shuffling clutter around.`,
      `A dramatic, one-time tidying festival is more effective than gradual organizing because it creates a visible before-and-after that shifts your mindset.`,
    ],
    summary: [
      `The Life-Changing Magic of Tidying Up introduces the KonMari Method, a systematic approach to decluttering that begins with a simple question: does this item spark joy? Kondo argues that most organizing advice fails because it focuses on storage rather than elimination — you can't organize clutter, you can only remove it.`,
      `The book walks readers through tidying by category in a prescribed order, building momentum with easy wins before tackling sentimental items. Kondo's approach is both practical and philosophical, suggesting that letting go of possessions that no longer serve you creates space for the life you actually want.`,
    ],
    chapters: [
      { title: `Why You Should Tidy`, summary: `Kondo makes the case that a tidy home transforms every aspect of your life — from decision-making to self-confidence.` },
      { title: `The KonMari Method`, summary: `She introduces the category-by-category approach and the "spark joy" criterion as the core of effective tidying.` },
      { title: `After Tidying`, summary: `What happens after the festival — how a decluttered space changes your habits, relationships, and sense of self.` },
    ],
    quotes: [
      { text: `The question of what you want to own is actually the question of how you want to live your life.`, context: `On the deeper meaning behind decluttering` },
      { text: `When you put your house in order, you put your affairs and your past in order, too.`, context: `On the psychological impact of physical tidying` },
    ],
    whoShouldRead: [
      `Anyone drowning in possessions who wants a clear, systematic method for letting go.`,
      `People who have tried organizing systems before but always end up back at square one.`,
      `Readers interested in the intersection of minimalism, mindfulness, and daily life.`,
    ],
    relatedBooks: [`essentialism`, `atomic-habits`, `power-of-habit`, `make-time`],
  },

  // ─────────────────────────────────────────────
  // 32. Goodbye, Things
  // ─────────────────────────────────────────────
  {
    slug: `goodbye-things`,
    title: `Goodbye, Things`,
    author: `Fumio Sasaki`,
    authorBio: `Fumio Sasaki is a Japanese editor and minimalist who dramatically reduced his possessions and wrote about how it transformed his life.`,
    year: 2015,
    pages: 264,
    category: `Personal Development`,
    tags: [`minimalism`, `possessions`, `happiness`, `simplicity`, `intentional-living`],
    coverColor: `from-white to-gray-200`,
    coverEmoji: `📦`,
    rating: 4.1,
    readingTime: `9 min read`,
    oneLiner: `A Japanese minimalist's memoir on how owning less led to more happiness, freedom, and time for what matters.`,
    keyTakeaways: [
      `We don't own our possessions — they own us, demanding time, attention, and mental energy we could spend elsewhere.`,
      `Reducing your belongings to the essentials reveals what truly makes you happy, and it's almost never stuff.`,
      `Minimalism is not about deprivation — it's about making room for experiences, relationships, and creative work.`,
    ],
    summary: [
      `Goodbye, Things is part memoir, part guidebook. Sasaki describes his transformation from an unhappy, stuff-accumulating editor to a contented minimalist living in a nearly empty apartment. He argues that modern consumer culture tricks us into believing that more possessions will bring happiness, when the opposite is true.`,
      `The book includes fifty-five tips for reducing your possessions and a philosophical reflection on why less really is more. Sasaki writes with gentle honesty, never preachy, simply sharing what worked for him and the surprising joy that emerged when the clutter disappeared.`,
    ],
    chapters: [
      { title: `Why We Accumulate`, summary: `Sasaki explores the psychological and cultural reasons we acquire far more than we need and struggle to let go.` },
      { title: `55 Tips for Letting Go`, summary: `A practical guide to reducing possessions, from starting with obvious discards to tackling sentimental items.` },
      { title: `Life After Minimalism`, summary: `Sasaki describes the unexpected benefits of owning less — more time, more gratitude, more presence, and more freedom.` },
    ],
    quotes: [
      { text: `The things we own end up owning us — taking our time, our energy, and our attention.`, context: `On the hidden cost of possessions` },
      { text: `Minimalism is not about having less. It's about making room for more of what matters.`, context: `On redefining minimalism as addition by subtraction` },
    ],
    whoShouldRead: [
      `Anyone curious about minimalism who wants a personal, relatable introduction.`,
      `People feeling weighed down by possessions who want practical tips for letting go.`,
      `Readers interested in Japanese culture and its approach to simplicity.`,
    ],
    relatedBooks: [`essentialism`, `atomic-habits`, `four-thousand-weeks`, `make-time`],
  },

  // ─────────────────────────────────────────────
  // 33. Declutter Your Mind
  // ─────────────────────────────────────────────
  {
    slug: `declutter-your-mind`,
    title: `Declutter Your Mind`,
    author: `S.J. Scott`,
    authorBio: `S.J. Scott is a habit-building author who has written extensively on simplifying daily routines and reducing mental clutter.`,
    year: 2016,
    pages: 198,
    category: `Focus & Deep Work`,
    tags: [`mental-clutter`, `mindfulness`, `focus`, `anxiety`, `clarity`],
    coverColor: `from-sky-300 to-sky-500`,
    coverEmoji: `🧹`,
    rating: 4.0,
    readingTime: `8 min read`,
    oneLiner: `Practical strategies for clearing mental clutter — the worries, distractions, and overthinking that drain your focus and energy.`,
    keyTakeaways: [
      `Mental clutter — unresolved worries, open loops, and constant information intake — is just as draining as physical clutter.`,
      `A daily decluttering practice (journaling, brain dumps, mindfulness) prevents mental buildup and restores focus.`,
      `Simplifying your commitments and relationships is as important as simplifying your physical space.`,
    ],
    summary: [
      `Declutter Your Mind addresses the invisible clutter that lives in our heads: worries, regrets, information overload, and the constant mental chatter that makes focused work impossible. Scott and co-author Barrie Davenport provide a systematic approach to clearing this mental noise.`,
      `The book covers four types of mental clutter — thoughts, relationships, surroundings, and tasks — and offers actionable strategies for each, from focused breathing exercises to environmental design. It is short, practical, and easy to implement immediately.`,
    ],
    chapters: [
      { title: `Declutter Your Thoughts`, summary: `Techniques for calming an overactive mind, including focused breathing, journaling, and cognitive reframing.` },
      { title: `Declutter Your Obligations`, summary: `How to identify and eliminate commitments that drain energy without delivering value.` },
      { title: `Declutter Your Relationships`, summary: `Strategies for setting boundaries and investing in relationships that energize rather than deplete you.` },
    ],
    quotes: [
      { text: `A cluttered mind leads to a cluttered life. Clear the mental noise, and clarity follows.`, context: `On the relationship between mental clutter and daily effectiveness` },
      { text: `You can't think clearly when your brain is full of unprocessed worries and unfinished tasks.`, context: `On why mental decluttering is a productivity prerequisite` },
    ],
    whoShouldRead: [
      `Overthinkers and worriers who want practical techniques for calming their mind.`,
      `People who feel mentally exhausted despite having a reasonable workload.`,
      `Anyone looking for a quick, actionable guide to improving focus and mental clarity.`,
    ],
    relatedBooks: [`deep-work`, `atomic-habits`, `make-time`, `essentialism`],
  },

  // ─────────────────────────────────────────────
  // 34. Singletasking
  // ─────────────────────────────────────────────
  {
    slug: `singletasking`,
    title: `Singletasking`,
    author: `Devora Zack`,
    authorBio: `Devora Zack is a leadership consultant and author who has worked with organizations from the Pentagon to the World Bank on focus and communication.`,
    year: 2015,
    pages: 192,
    category: `Focus & Deep Work`,
    tags: [`focus`, `single-tasking`, `attention`, `presence`, `multitasking`],
    coverColor: `from-blue-400 to-blue-600`,
    coverEmoji: `1️⃣`,
    rating: 4.0,
    readingTime: `8 min read`,
    oneLiner: `A compelling case for doing one thing at a time in a world that glorifies multitasking — and a practical guide to making it happen.`,
    keyTakeaways: [
      `Multitasking is a myth — the brain can only focus on one cognitive task at a time, and "switching" between tasks costs up to 40% of productive time.`,
      `Singletasking improves not just productivity but also the quality of relationships, conversations, and creative output.`,
      `Presence — giving your full attention to whatever you're doing — is the most underrated productivity skill.`,
    ],
    summary: [
      `Singletasking dismantles the myth of multitasking with neuroscience research showing that the brain cannot truly do two cognitive tasks simultaneously — it can only switch rapidly between them, incurring massive costs in accuracy, speed, and energy.`,
      `Zack then offers a practical framework for building a singletasking practice: from silencing notifications to structuring meetings for focused discussion. The book extends beyond work into relationships and personal life, arguing that presence is the ultimate form of respect and effectiveness.`,
    ],
    chapters: [
      { title: `The Multitasking Myth`, summary: `Zack presents the neuroscience evidence that multitasking is actually rapid task-switching with severe cognitive costs.` },
      { title: `The Singletasking Principle`, summary: `She introduces a framework for giving full attention to one task at a time and explains why this dramatically improves output.` },
      { title: `Presence in Practice`, summary: `Practical strategies for singletasking in meetings, conversations, email, and creative work.` },
    ],
    quotes: [
      { text: `Multitasking is not doing more at once. It's doing less of everything, worse.`, context: `On the cognitive cost of divided attention` },
      { text: `The greatest gift you can give another person is your undivided attention.`, context: `On singletasking as a relationship skill` },
    ],
    whoShouldRead: [
      `Chronic multitaskers who feel busy but unproductive.`,
      `Managers who want to improve meeting quality and team focus.`,
      `Anyone who wants to be more present in conversations and relationships.`,
    ],
    relatedBooks: [`deep-work`, `make-time`, `essentialism`, `getting-things-done`],
  },

  // ─────────────────────────────────────────────
  // 35. Attention Span
  // ─────────────────────────────────────────────
  {
    slug: `attention-span`,
    title: `Attention Span`,
    author: `Gloria Mark`,
    authorBio: `Gloria Mark is a Chancellor's Professor of informatics at UC Irvine who has studied digital distraction and attention for over two decades.`,
    year: 2023,
    pages: 304,
    category: `Focus & Deep Work`,
    tags: [`attention`, `distraction`, `technology`, `focus`, `digital-wellbeing`],
    coverColor: `from-red-400 to-orange-500`,
    coverEmoji: `👁️`,
    rating: 4.3,
    readingTime: `11 min read`,
    oneLiner: `A leading attention researcher reveals how screens have shrunk our focus from 2.5 minutes to 47 seconds — and what to do about it.`,
    keyTakeaways: [
      `The average attention span on a screen has shrunk from 2.5 minutes in 2004 to just 47 seconds today, according to decades of empirical measurement.`,
      `Attention follows a rhythm — people oscillate between focused and rote work, and designing your day around this rhythm boosts productivity.`,
      `Internal interruptions (self-distraction) are as damaging as external ones, and both can be managed through environmental design and meta-awareness.`,
    ],
    summary: [
      `Attention Span is based on over two decades of empirical research in which Mark and her team measured how people actually use their attention throughout the workday. Her findings are sobering: our focus spans have halved in twenty years, and we self-interrupt almost as often as we're interrupted by others.`,
      `But the book is not a doom-and-gloom account. Mark introduces the concept of "kinetic attention" — the natural rhythm of switching between focused and rote tasks — and provides strategies for working with your attention patterns rather than against them. She offers practical, research-backed advice for reclaiming focus in a distracted world.`,
    ],
    chapters: [
      { title: `Measuring Attention`, summary: `Mark describes her research methodology and the startling finding that screen attention spans have halved in two decades.` },
      { title: `Kinetic Attention`, summary: `She introduces the concept of attention rhythms and explains why working with them — not against them — is the key to productivity.` },
      { title: `Reclaiming Focus`, summary: `Evidence-based strategies for managing interruptions, designing your environment, and building meta-awareness of your attention patterns.` },
    ],
    quotes: [
      { text: `Our attention spans haven't just shortened — they've been shredded by a world designed to interrupt us.`, context: `On the structural forces working against sustained focus` },
      { text: `The good news is that attention is not a fixed trait. It's a skill you can rebuild.`, context: `On the hopeful side of the attention crisis` },
    ],
    whoShouldRead: [
      `Anyone who feels their ability to focus has declined and wants to understand why.`,
      `Researchers and educators interested in the empirical science of attention.`,
      `Knowledge workers who want evidence-based strategies for managing distraction.`,
    ],
    relatedBooks: [`deep-work`, `make-time`, `essentialism`, `atomic-habits`],
  },

  // ─────────────────────────────────────────────
  // 36. Think Like a Monk
  // ─────────────────────────────────────────────
  {
    slug: `think-like-monk`,
    title: `Think Like a Monk`,
    author: `Jay Shetty`,
    authorBio: `Jay Shetty is a former monk turned bestselling author and purpose coach whose videos on wisdom and mindfulness have been viewed billions of times.`,
    year: 2020,
    pages: 352,
    category: `Personal Development`,
    tags: [`mindfulness`, `purpose`, `monk-philosophy`, `meditation`, `values`],
    coverColor: `from-amber-500 to-amber-700`,
    coverEmoji: `🧘`,
    rating: 4.3,
    readingTime: `12 min read`,
    oneLiner: `Ancient monk wisdom translated into modern practices for finding purpose, calm, and clarity in a noisy world.`,
    keyTakeaways: [
      `Most of our thoughts, values, and goals are not our own — they are inherited from society, media, and peers, and need to be audited.`,
      `A daily practice of solitude, meditation, and reflection is the monk's secret weapon for clarity and purpose.`,
      `Service to others is not a sacrifice — it is one of the most reliable paths to personal meaning and fulfillment.`,
    ],
    summary: [
      `Think Like a Monk draws on Shetty's three years living as a Vedic monk to distill ancient wisdom into a modern self-help framework. He covers how to let go of negative influences, discover your dharma (purpose), and build daily routines rooted in mindfulness, gratitude, and service.`,
      `The book is organized around the monk's journey: let go (of ego, fear, and external noise), grow (through routine, purpose, and mindset), and give (through service and gratitude). Shetty's writing is accessible and story-driven, making philosophical concepts feel practical and actionable.`,
    ],
    chapters: [
      { title: `Let Go`, summary: `Shetty guides readers through identifying and releasing the external influences, negative self-talk, and fear that cloud judgment.` },
      { title: `Grow`, summary: `He introduces daily practices — meditation, journaling, intentional routines — that build clarity, purpose, and inner strength.` },
      { title: `Give`, summary: `The book culminates in the monk principle that service and gratitude are the highest forms of personal growth.` },
    ],
    quotes: [
      { text: `When you try to live your most authentic life, some of your relationships will be tested and some will be lost. But the ones that remain will be truer.`, context: `On the cost and reward of living with integrity` },
      { text: `The mind is a terrible master but a wonderful servant.`, context: `On the importance of mental discipline and meditation` },
    ],
    whoShouldRead: [
      `Anyone feeling lost or unfulfilled who wants a structured approach to finding purpose.`,
      `People interested in Eastern philosophy presented in a modern, accessible format.`,
      `Readers who want to build a daily mindfulness practice with clear guidance.`,
    ],
    relatedBooks: [`atomic-habits`, `seven-habits`, `power-of-habit`, `almanack-naval`],
  },

  // ─────────────────────────────────────────────
  // 37. The 5 AM Miracle
  // ─────────────────────────────────────────────
  {
    slug: `5am-miracle`,
    title: `The 5 AM Miracle`,
    author: `Jeff Sanders`,
    authorBio: `Jeff Sanders is a productivity coach, podcaster, and early-morning advocate who helps people design energizing morning routines.`,
    year: 2015,
    pages: 192,
    category: `Habits & Routines`,
    tags: [`morning-routine`, `early-rising`, `energy`, `planning`, `habits`],
    coverColor: `from-orange-400 to-orange-600`,
    coverEmoji: `☀️`,
    rating: 4.0,
    readingTime: `8 min read`,
    oneLiner: `A practical guide to waking up at 5 AM and using the quiet morning hours to dominate your most important goals.`,
    keyTakeaways: [
      `The hours before the world wakes up are the most distraction-free, creative, and productive hours of the day.`,
      `A great morning starts the night before — evening routines and early bedtimes are non-negotiable for sustainable early rising.`,
      `Quarter-system planning (90-day goals) gives your mornings direction and ensures the early hours serve a meaningful purpose.`,
    ],
    summary: [
      `The 5 AM Miracle makes the case that waking early is not about suffering — it's about seizing the quietest, most creative hours for your most important work. Sanders provides a step-by-step system for transitioning to a 5 AM wake-up, including evening routines, sleep optimization, and morning rituals.`,
      `Beyond just waking up early, the book connects morning time to a broader goal-setting framework using 90-day planning cycles. Sanders argues that without a clear purpose, early mornings are wasted — but with one, they become the foundation of extraordinary productivity.`,
    ],
    chapters: [
      { title: `The Case for 5 AM`, summary: `Sanders explains why early mornings offer a unique window of focus, creativity, and energy that the rest of the day can't match.` },
      { title: `The Ideal Morning Routine`, summary: `A blueprint for designing a morning routine that includes exercise, learning, planning, and creative work.` },
      { title: `Quarter-System Planning`, summary: `He introduces a 90-day goal-setting framework that gives purpose and direction to your morning hours.` },
    ],
    quotes: [
      { text: `The secret is not waking up early — it's having a reason to.`, context: `On why purpose must precede the alarm clock` },
      { text: `Win the morning, win the day. But winning the morning starts the night before.`, context: `On the essential role of evening routines` },
    ],
    whoShouldRead: [
      `People who want to become early risers and need a structured transition plan.`,
      `Anyone who feels their best hours are wasted on low-priority tasks.`,
      `Fans of Miracle Morning who want a complementary approach with quarterly planning.`,
    ],
    relatedBooks: [`miracle-morning`, `atomic-habits`, `compound-effect`, `seven-habits`],
  },

  // ─────────────────────────────────────────────
  // 38. Daily Rituals
  // ─────────────────────────────────────────────
  {
    slug: `daily-rituals`,
    title: `Daily Rituals`,
    author: `Mason Currey`,
    authorBio: `Mason Currey is an author and journalist who spent years cataloging the daily routines of history's most creative and productive minds.`,
    year: 2013,
    pages: 304,
    category: `Habits & Routines`,
    tags: [`routines`, `creativity`, `famous-people`, `habits`, `work-rituals`],
    coverColor: `from-blue-400 to-blue-600`,
    coverEmoji: `📅`,
    rating: 4.2,
    readingTime: `10 min read`,
    oneLiner: `A fascinating catalog of how 161 brilliant artists, writers, scientists, and composers structured their daily work rituals.`,
    keyTakeaways: [
      `There is no single "ideal" routine — history's most creative people used wildly different schedules, proving you must find what works for you.`,
      `The one common thread is consistency — nearly all great creators had a ritual they followed daily, even when they didn't feel inspired.`,
      `Many of history's greatest works were produced in just a few focused hours per day, not marathon sessions.`,
    ],
    summary: [
      `Daily Rituals is a collection of 161 short profiles describing how renowned creators — from Beethoven and Austen to Hemingway and Warhol — structured their working days. Currey covers when they woke, how they worked, what they ate, and how they managed distraction and procrastination.`,
      `The book is less prescriptive and more inspirational: it shows the enormous range of routines that have produced great work. Some worked at dawn, others late at night; some needed silence, others preferred cafes. The unifying lesson is that having a ritual matters far more than which ritual you choose.`,
    ],
    chapters: [
      { title: `The Early Risers`, summary: `Profiles of creators like Benjamin Franklin and Toni Morrison who did their best work in the early morning hours.` },
      { title: `The Night Owls`, summary: `Creators like Franz Kafka and Marcel Proust who thrived after dark, proving there is no universal "best time" to create.` },
      { title: `The Rituals`, summary: `Common patterns — walks, naps, stimulants, strict schedules — that recur across centuries of creative genius.` },
    ],
    quotes: [
      { text: `A solid routine fosters a well-worn groove for one's mental energies and helps stave off the tyranny of moods.`, context: `On why ritual protects against the unpredictability of inspiration` },
      { text: `Be regular and orderly in your life so that you may be violent and original in your work.`, context: `Gustave Flaubert, quoted in the book on the paradox of creative discipline` },
    ],
    whoShouldRead: [
      `Creative professionals looking for inspiration in how other great minds structured their days.`,
      `Anyone curious about the daily habits behind history's greatest works.`,
      `People who want reassurance that there is no single "right" way to organize a productive day.`,
    ],
    relatedBooks: [`deep-work`, `atomic-habits`, `miracle-morning`, `make-time`],
  },

  // ─────────────────────────────────────────────
  // 39. Rest Is Resistance
  // ─────────────────────────────────────────────
  {
    slug: `rest-is-resistance`,
    title: `Rest Is Resistance`,
    author: `Tricia Hersey`,
    authorBio: `Tricia Hersey is the founder of The Nap Ministry and a theologian, artist, and activist who champions rest as a form of social justice.`,
    year: 2022,
    pages: 224,
    category: `Health & Energy`,
    tags: [`rest`, `resistance`, `burnout`, `social-justice`, `self-care`],
    coverColor: `from-purple-400 to-purple-600`,
    coverEmoji: `💤`,
    rating: 4.2,
    readingTime: `9 min read`,
    oneLiner: `A radical manifesto arguing that rest is not laziness — it is a revolutionary act of resistance against a culture built on exploitation.`,
    keyTakeaways: [
      `Grind culture is not a personal failing to overcome — it is a systemic feature of capitalism designed to extract maximum labor.`,
      `Rest is a human right, not a reward for productivity, and reclaiming it is an act of resistance and liberation.`,
      `Naps, daydreaming, and intentional idleness are not indulgences — they are essential for physical, mental, and spiritual health.`,
    ],
    summary: [
      `Rest Is Resistance is a manifesto from the founder of The Nap Ministry, arguing that the glorification of overwork is rooted in systems of oppression. Hersey contends that rest deprivation is not just a personal problem but a societal one, and that choosing to rest is a radical political act.`,
      `The book blends theology, cultural criticism, and personal reflection to reframe rest as essential rather than earned. Hersey's writing is poetic and passionate, challenging readers to examine their relationship with productivity and reclaim their right to rest without guilt or justification.`,
    ],
    chapters: [
      { title: `Grind Culture`, summary: `Hersey traces the roots of overwork culture and its connection to systems of exploitation, arguing that rest disrupts these systems.` },
      { title: `Rest as Resistance`, summary: `She reframes rest as a revolutionary act — not laziness but a refusal to participate in a dehumanizing system.` },
      { title: `Reclaiming Your Body`, summary: `Practical and philosophical guidance for building a rest practice that honors your body, mind, and spirit.` },
    ],
    quotes: [
      { text: `You are not a machine. You are a divine being worthy of rest.`, context: `On reclaiming humanity in a productivity-obsessed culture` },
      { text: `Rest is not a luxury. It is a birthright.`, context: `On the fundamental right to rest without guilt` },
    ],
    whoShouldRead: [
      `Anyone struggling with burnout who needs permission and a framework to prioritize rest.`,
      `Readers interested in the intersection of social justice, theology, and wellness.`,
      `People who feel guilty about resting and want to understand the cultural roots of that guilt.`,
    ],
    relatedBooks: [`four-thousand-weeks`, `essentialism`, `deep-work`, `make-time`],
  },

  // ─────────────────────────────────────────────
  // 40. Good Habits, Bad Habits
  // ─────────────────────────────────────────────
  {
    slug: `good-habits-bad-habits`,
    title: `Good Habits, Bad Habits`,
    author: `Wendy Wood`,
    authorBio: `Wendy Wood is a leading behavioral scientist and Provost Professor at the University of Southern California whose research on habits has shaped the field.`,
    year: 2019,
    pages: 320,
    category: `Habits & Routines`,
    tags: [`habits`, `behavioral-science`, `automaticity`, `environment`, `friction`],
    coverColor: `from-green-400 to-teal-500`,
    coverEmoji: `🔄`,
    rating: 4.2,
    readingTime: `11 min read`,
    oneLiner: `A leading habit researcher reveals that willpower is overrated — what really drives behavior is the friction and reward structure of your environment.`,
    keyTakeaways: [
      `About 43% of daily actions are habitual — performed automatically based on context rather than conscious decision, making environment design critical.`,
      `Friction is the most powerful lever for behavior change: making good habits easy and bad habits hard beats willpower every time.`,
      `Rewards must be immediate to reinforce habits — delayed rewards (like long-term health) are too distant to drive automatic behavior.`,
    ],
    summary: [
      `Good Habits, Bad Habits is a scientist's authoritative account of how habits actually work. Wood synthesizes decades of her own research and the broader behavioral science literature to show that habits are driven not by motivation or willpower but by context, friction, and reward.`,
      `The practical implication is powerful: instead of trying harder, redesign your environment. Make the desired behavior the easiest option and add immediate rewards. Wood's writing is clear and evidence-rich, offering a scientifically rigorous complement to popular habit books.`,
    ],
    chapters: [
      { title: `The Habit Machine`, summary: `Wood explains how the brain automates repeated behaviors and why habits persist even when we consciously want to change.` },
      { title: `Friction and Fuel`, summary: `She introduces the twin levers of friction (making bad habits harder) and reward (making good habits immediately satisfying).` },
      { title: `Designing Your Life`, summary: `Practical strategies for restructuring your environment, routines, and cues to make desired habits the path of least resistance.` },
    ],
    quotes: [
      { text: `Willpower is not the hero of behavior change — your environment is.`, context: `On why environmental design matters more than self-control` },
      { text: `We don't break bad habits. We replace them — by making the alternative easier and more rewarding.`, context: `On the science of habit substitution` },
    ],
    whoShouldRead: [
      `Readers who want the scientific foundation behind popular books like Atomic Habits.`,
      `Anyone who has tried willpower-based approaches and found them insufficient.`,
      `Behavioral scientists, coaches, and educators interested in evidence-based habit formation.`,
    ],
    relatedBooks: [`atomic-habits`, `power-of-habit`, `tiny-habits`, `compound-effect`],
  },

  // ─────────────────────────────────────────────
  // 41. Elastic Habits
  // ─────────────────────────────────────────────
  {
    slug: `elastic-habits`,
    title: `Elastic Habits`,
    author: `Stephen Guise`,
    authorBio: `Stephen Guise is the author of Mini Habits and a behavior-change writer known for flexible, low-friction approaches to habit formation.`,
    year: 2019,
    pages: 256,
    category: `Habits & Routines`,
    tags: [`flexible-habits`, `behavior-change`, `adaptability`, `goals`, `consistency`],
    coverColor: `from-purple-300 to-purple-500`,
    coverEmoji: `🎯`,
    rating: 4.1,
    readingTime: `9 min read`,
    oneLiner: `A flexible habit system with three intensity levels per habit — so you never have an excuse to skip and never feel locked into one rigid routine.`,
    keyTakeaways: [
      `Every habit should have three tiers — mini, plus, and elite — so you can always do something regardless of energy or time.`,
      `Rigid all-or-nothing habits break under real-life pressure; elastic habits bend without breaking.`,
      `Lateral flexibility (choosing which habit to do) combined with vertical flexibility (choosing how much) creates an adaptable system that lasts.`,
    ],
    summary: [
      `Elastic Habits builds on Guise's earlier Mini Habits work by adding a flexible structure: each habit has three intensity levels you choose from daily based on your energy and schedule. On a great day, you do the elite version; on a tough day, you do the mini — but you never skip entirely.`,
      `The system also offers lateral flexibility — multiple habit options to choose from each day — ensuring that daily practice never feels monotonous or forced. Guise argues this combination of vertical and lateral flexibility is what makes habits truly resilient to the chaos of real life.`,
    ],
    chapters: [
      { title: `The Elastic Concept`, summary: `Guise introduces the three-tier habit system and explains why flexibility, not rigidity, is the key to long-term consistency.` },
      { title: `Vertical and Lateral Flexibility`, summary: `He explains the two dimensions of flexibility: how much you do (vertical) and which habit you choose (lateral).` },
      { title: `Building Your Elastic System`, summary: `A practical guide to designing, tracking, and evolving your own elastic habit system.` },
    ],
    quotes: [
      { text: `The best habit system isn't the most ambitious one — it's the one that survives your worst days.`, context: `On designing habits for real-life variability` },
      { text: `Flexibility is not weakness. In habits, it is the ultimate strength.`, context: `On why rigid habit systems inevitably break` },
    ],
    whoShouldRead: [
      `Anyone whose habit streaks keep breaking due to unpredictable schedules.`,
      `Fans of Mini Habits who want a more sophisticated but equally flexible system.`,
      `People who dislike rigid routines and want a habit system that adapts to daily life.`,
    ],
    relatedBooks: [`atomic-habits`, `tiny-habits`, `compound-effect`, `power-of-habit`],
  },

  // ─────────────────────────────────────────────
  // 42. Just Keep Buying
  // ─────────────────────────────────────────────
  {
    slug: `just-keep-buying`,
    title: `Just Keep Buying`,
    author: `Nick Maggiulli`,
    authorBio: `Nick Maggiulli is the Chief Operating Officer at Ritholtz Wealth Management and the data-driven finance blogger behind Of Dollars and Data.`,
    year: 2022,
    pages: 256,
    category: `Wealth & Finance`,
    tags: [`investing`, `saving`, `data-driven`, `wealth-building`, `personal-finance`],
    coverColor: `from-green-500 to-green-700`,
    coverEmoji: `📈`,
    rating: 4.5,
    readingTime: `10 min read`,
    oneLiner: `A data-driven guide proving that the simplest investment strategy — just keep buying — beats almost every alternative over the long run.`,
    keyTakeaways: [
      `Time in the market beats timing the market — consistent investing over decades is the most reliable path to wealth, regardless of entry point.`,
      `When you're young, focus on increasing income (your biggest asset); when you're older, focus on investing what you have.`,
      `Most financial advice overcomplicates things — saving consistently and buying diversified assets is enough for the vast majority of people.`,
    ],
    summary: [
      `Just Keep Buying uses data analysis to strip personal finance down to its essentials. Maggiulli demonstrates with charts and historical analysis that dollar-cost averaging into diversified investments — simply buying consistently — outperforms market timing, stock picking, and most sophisticated strategies.`,
      `The book is divided into saving and investing sections. The saving chapters tackle how much to save, when to spend guilt-free, and how to grow your income. The investing chapters cover asset allocation, when to buy, and how to handle market crashes. Maggiulli writes with the clarity of a great data analyst and the warmth of a trusted friend.`,
    ],
    chapters: [
      { title: `How to Save`, summary: `Maggiulli reframes saving as a function of income growth and provides data-backed rules for how much to save at every life stage.` },
      { title: `How to Invest`, summary: `He demonstrates why buying consistently (dollar-cost averaging) into diversified funds beats every timing strategy he could test.` },
      { title: `How to Spend`, summary: `A refreshing chapter on guilt-free spending, arguing that life optimization requires spending on what you value, not just hoarding.` },
    ],
    quotes: [
      { text: `The best time to invest was yesterday. The second-best time is today. Just keep buying.`, context: `On the power of consistent investing over market timing` },
      { text: `Save what you can, invest what you have, and spend on what matters to you.`, context: `On the simple formula for financial wellbeing` },
    ],
    whoShouldRead: [
      `Beginner and intermediate investors who want a simple, data-backed investment strategy.`,
      `Anyone paralyzed by market timing fears who needs reassurance that consistency wins.`,
      `Readers who prefer charts and data over anecdotes and theory in their finance books.`,
    ],
    relatedBooks: [`psychology-of-money`, `almanack-naval`, `atomic-habits`, `seven-habits`],
  },

  // ─────────────────────────────────────────────
  // 43. Die with Zero
  // ─────────────────────────────────────────────
  {
    slug: `die-with-zero`,
    title: `Die with Zero`,
    author: `Bill Perkins`,
    authorBio: `Bill Perkins is an entrepreneur, hedge fund manager, and filmmaker who advocates for optimizing life experiences rather than net worth.`,
    year: 2020,
    pages: 240,
    category: `Wealth & Finance`,
    tags: [`life-optimization`, `experiences`, `money`, `time`, `intentional-living`],
    coverColor: `from-black to-gray-700`,
    coverEmoji: `💀`,
    rating: 4.4,
    readingTime: `9 min read`,
    oneLiner: `A provocative argument that the goal of money is to fund life experiences — not to die with the biggest bank balance.`,
    keyTakeaways: [
      `Most people save too much for too long and die with money they never enjoyed — the goal should be to die with zero.`,
      `Every experience has an optimal age window; delaying travel, adventure, and generosity until retirement often means missing the best time for them.`,
      `Give money to your children and causes when it can make the biggest impact — while you're alive — not in your will.`,
    ],
    summary: [
      `Die with Zero challenges the conventional wisdom of saving endlessly for retirement. Perkins argues that money is a tool for buying experiences and that most people massively over-save, dying with fortunes they never got to enjoy. He proposes a radical alternative: plan to spend your last dollar on your last day.`,
      `The book introduces concepts like "memory dividends" (the compounding value of experiences over time) and age-based optimization (matching activities to the life stage where you can enjoy them most). It is provocative, well-argued, and forces readers to confront their assumptions about money and life.`,
    ],
    chapters: [
      { title: `Optimize Your Life, Not Your Wealth`, summary: `Perkins argues that the purpose of money is to fund experiences and that over-saving is as much a failure as overspending.` },
      { title: `Memory Dividends`, summary: `He introduces the idea that experiences pay dividends through memories, and the earlier you invest, the more dividends you collect.` },
      { title: `Time Buckets`, summary: `A framework for planning experiences across life decades so you match each activity to the age when you can enjoy it most.` },
    ],
    quotes: [
      { text: `Your life is the sum of your experiences. Make sure you're spending on the right ones at the right time.`, context: `On optimizing for experiences rather than net worth` },
      { text: `The biggest risk in life isn't losing money — it's losing time.`, context: `On why over-saving can be as dangerous as overspending` },
    ],
    whoShouldRead: [
      `Savers who are on track financially but worry they might be deferring life experiences too long.`,
      `Anyone approaching midlife who wants a framework for balancing saving and living.`,
      `Readers who enjoy contrarian financial thinking that challenges conventional wisdom.`,
    ],
    relatedBooks: [`psychology-of-money`, `four-thousand-weeks`, `almanack-naval`, `atomic-habits`],
  },

  // ─────────────────────────────────────────────
  // 44. Money: Master the Game
  // ─────────────────────────────────────────────
  {
    slug: `money-master-game`,
    title: `Money: Master the Game`,
    author: `Tony Robbins`,
    authorBio: `Tony Robbins is a world-renowned life coach, speaker, and author who has advised presidents, athletes, and billionaires on peak performance and financial freedom.`,
    year: 2014,
    pages: 688,
    category: `Wealth & Finance`,
    tags: [`investing`, `financial-freedom`, `wealth`, `strategies`, `retirement`],
    coverColor: `from-green-600 to-green-800`,
    coverEmoji: `🎮`,
    rating: 4.1,
    readingTime: `14 min read`,
    oneLiner: `A comprehensive financial playbook distilling advice from fifty of the world's greatest investors into seven simple steps to financial freedom.`,
    keyTakeaways: [
      `Automate your savings — "pay yourself first" by directing a percentage of every paycheck into investments before you can spend it.`,
      `Fees are the silent killer of wealth; switching to low-cost index funds can save hundreds of thousands of dollars over a lifetime.`,
      `Asset allocation — how you divide money among stocks, bonds, and alternatives — matters far more than individual stock picking.`,
    ],
    summary: [
      `Money: Master the Game is Robbins's attempt to democratize financial advice by interviewing fifty of the world's top investors — from Ray Dalio to Warren Buffett — and distilling their wisdom into seven actionable steps. The book covers everything from how much to save and where to invest to how to generate income in retirement.`,
      `Despite its length, the core message is simple: save automatically, minimize fees, diversify broadly, and let compound interest do the heavy lifting. Robbins includes specific portfolio recommendations and a charitable component, pledging all author profits to feeding the hungry.`,
    ],
    chapters: [
      { title: `The 7 Simple Steps`, summary: `Robbins outlines seven steps to financial freedom: make the decision, know the rules, set the game plan, allocate, create a lifetime income, invest like a billionaire, and enjoy it.` },
      { title: `The Fee Illusion`, summary: `He reveals how seemingly small investment fees compound into massive wealth destruction over decades and how to avoid them.` },
      { title: `Asset Allocation Mastery`, summary: `Insights from Ray Dalio and other legends on building an all-weather portfolio that weathers any market condition.` },
    ],
    quotes: [
      { text: `It's not what you earn that matters — it's what you keep, and how hard it works for you.`, context: `On the importance of saving and investing over income alone` },
      { text: `The secret to wealth is simple: find a way to do more for others than anyone else does.`, context: `On the link between value creation and financial freedom` },
    ],
    whoShouldRead: [
      `Financial beginners who want a comprehensive but accessible roadmap to investing.`,
      `Anyone paying high investment fees who wants to understand their true long-term cost.`,
      `Readers who enjoy learning from the strategies of the world's greatest investors.`,
    ],
    relatedBooks: [`psychology-of-money`, `almanack-naval`, `seven-habits`, `atomic-habits`],
  },

  // ─────────────────────────────────────────────
  // 45. Total Recall
  // ─────────────────────────────────────────────
  {
    slug: `total-recall`,
    title: `Total Recall`,
    author: `Arnold Schwarzenegger`,
    authorBio: `Arnold Schwarzenegger is a bodybuilding champion, Hollywood icon, former Governor of California, and one of the most successful immigrants in American history.`,
    year: 2012,
    pages: 656,
    category: `Personal Development`,
    tags: [`autobiography`, `ambition`, `discipline`, `visualization`, `reinvention`],
    coverColor: `from-red-500 to-red-700`,
    coverEmoji: `💪`,
    rating: 4.3,
    readingTime: `14 min read`,
    oneLiner: `Arnold Schwarzenegger's extraordinary autobiography — from Austrian village to bodybuilding champion to Hollywood star to governor — and the mindset behind it all.`,
    keyTakeaways: [
      `Visualization is not wishful thinking — Arnold credits his success to vivid mental rehearsal of every goal before pursuing it physically.`,
      `Reps matter everywhere: the discipline of bodybuilding (repetition, progressive overload, consistency) applies to every domain of life.`,
      `Reinvention is possible at any age — Arnold's career proves that you're never locked into one identity or trajectory.`,
    ],
    summary: [
      `Total Recall traces Schwarzenegger's improbable journey from a small Austrian village to the pinnacle of bodybuilding, Hollywood, and American politics. At every stage, the same principles recur: set a vivid goal, work relentlessly, embrace discomfort, and never let others define your limits.`,
      `The book is candid about failures and controversies alongside the triumphs, making it a nuanced portrait of ambition. For productivity readers, the lessons on visualization, discipline, and serial reinvention are directly applicable to any career or personal goal.`,
    ],
    chapters: [
      { title: `The Austrian Oak`, summary: `Arnold recounts his childhood, early bodybuilding career, and the relentless drive that took him from Graz to the Mr. Olympia stage.` },
      { title: `Hollywood and Beyond`, summary: `He describes breaking into acting despite every disadvantage and the visualization techniques that powered his blockbuster career.` },
      { title: `The Governator`, summary: `Arnold's leap into politics, his governorship of California, and the lessons on leadership, compromise, and public service.` },
    ],
    quotes: [
      { text: `The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it.`, context: `On the power of visualization and belief` },
      { text: `Strength does not come from winning. Your struggles develop your strength.`, context: `On the necessity of adversity for growth` },
    ],
    whoShouldRead: [
      `Anyone who needs a shot of motivation and proof that audacious goals are achievable.`,
      `Readers interested in the mindset behind extreme achievement across multiple domains.`,
      `People who enjoy candid, large-scale autobiographies.`,
    ],
    relatedBooks: [`seven-habits`, `atomic-habits`, `compound-effect`, `almanack-naval`],
  },

  // ─────────────────────────────────────────────
  // 46. Greenlights
  // ─────────────────────────────────────────────
  {
    slug: `greenlights`,
    title: `Greenlights`,
    author: `Matthew McConaughey`,
    authorBio: `Matthew McConaughey is an Academy Award–winning actor, professor, and bestselling author known for his unconventional philosophy of life.`,
    year: 2020,
    pages: 304,
    category: `Personal Development`,
    tags: [`memoir`, `philosophy`, `resilience`, `adventure`, `self-discovery`],
    coverColor: `from-green-400 to-green-600`,
    coverEmoji: `🟢`,
    rating: 4.2,
    readingTime: `10 min read`,
    oneLiner: `A memoir of wild adventures and hard-won wisdom, arguing that life's red and yellow lights eventually turn green if you keep moving.`,
    keyTakeaways: [
      `Red lights (setbacks) and yellow lights (caution) are not permanent — with patience and persistence, they turn green.`,
      `Catching "greenlights" requires living proactively: making choices, taking risks, and creating your own luck through preparation.`,
      `Journaling is a powerful tool for self-knowledge; McConaughey's entire book is drawn from decades of personal journals.`,
    ],
    summary: [
      `Greenlights is part memoir, part philosophy, drawn from thirty-five years of McConaughey's personal journals. He shares stories from growing up in Texas, traveling the world, and navigating Hollywood — each revealing lessons about living with intention, humor, and resilience.`,
      `The central metaphor is the traffic light: some moments are green (go), some are yellow (caution), and some are red (stop). McConaughey argues that with the right perspective, even red lights eventually turn green. The book is raw, funny, and surprisingly philosophical.`,
    ],
    chapters: [
      { title: `Outlaw Logic`, summary: `McConaughey shares formative experiences from a wild Texas upbringing that shaped his unconventional worldview.` },
      { title: `Finding More Greenlights`, summary: `He explores how proactive choices, adventure, and risk-taking create the conditions for "catching greenlights" in life.` },
      { title: `Turning Red Lights Green`, summary: `Stories of setbacks that ultimately became growth opportunities, illustrating that perspective transforms adversity.` },
    ],
    quotes: [
      { text: `Life's barely long enough to get good at one thing. So be careful what you get good at.`, context: `On the importance of choosing your pursuits wisely` },
      { text: `Sometimes you've got to go back to actually move forward.`, context: `On the non-linear nature of personal growth` },
    ],
    whoShouldRead: [
      `Anyone who enjoys unconventional memoirs that blend storytelling with life philosophy.`,
      `People going through a difficult period who need a reminder that red lights turn green.`,
      `Readers who appreciate raw, honest writing over polished self-help formulas.`,
    ],
    relatedBooks: [`atomic-habits`, `seven-habits`, `almanack-naval`, `compound-effect`],
  },

  // ─────────────────────────────────────────────
  // 47. Everything Is Figureoutable
  // ─────────────────────────────────────────────
  {
    slug: `everything-is-figureoutable`,
    title: `Everything Is Figureoutable`,
    author: `Marie Forleo`,
    authorBio: `Marie Forleo is an entrepreneur, author, and host of MarieTV, named by Oprah as a thought leader for the next generation.`,
    year: 2019,
    pages: 288,
    category: `Mindset & Psychology`,
    tags: [`mindset`, `problem-solving`, `belief`, `action`, `resilience`],
    coverColor: `from-yellow-400 to-yellow-600`,
    coverEmoji: `💡`,
    rating: 4.2,
    readingTime: `10 min read`,
    oneLiner: `A mindset manifesto built on one belief: no matter the challenge, everything is figureoutable — and that belief changes everything.`,
    keyTakeaways: [
      `The belief that "everything is figureoutable" is not naive optimism — it is a practical mindset that activates problem-solving and resilience.`,
      `Most limitations are not facts but beliefs in disguise; challenging them is the first step to breakthrough.`,
      `Progress comes from action, not perfection — start before you're ready and figure it out along the way.`,
    ],
    summary: [
      `Everything Is Figureoutable is built on a single, powerful belief that Forleo learned from her mother: any problem can be solved with enough resourcefulness and determination. The book applies this mindset to career changes, creative blocks, relationship challenges, and financial goals.`,
      `Forleo blends personal stories, practical exercises, and motivational energy into a book that reads like a pep talk from your most resourceful friend. She addresses common objections (like "but my problem is different") head-on and provides frameworks for turning overwhelm into actionable steps.`,
    ],
    chapters: [
      { title: `The Figureoutable Philosophy`, summary: `Forleo introduces the core belief and shows how adopting it transforms your approach to every challenge.` },
      { title: `Eliminating Excuses`, summary: `She systematically dismantles the most common reasons people stay stuck — fear, time, money, and impostor syndrome.` },
      { title: `Taking Action`, summary: `Practical frameworks for moving from overwhelm to action, including how to start before you feel ready.` },
    ],
    quotes: [
      { text: `Everything is figureoutable. It's not just a mantra — it's a practical methodology for solving any problem.`, context: `On the core philosophy of the book` },
      { text: `The world needs that special gift that only you have. Stop waiting for permission and start.`, context: `On overcoming the paralysis of perfectionism and self-doubt` },
    ],
    whoShouldRead: [
      `Anyone feeling stuck who needs a mindset shift and a kick of motivation.`,
      `Aspiring entrepreneurs and creators paralyzed by self-doubt or impostor syndrome.`,
      `People who respond well to energetic, action-oriented self-help writing.`,
    ],
    relatedBooks: [`atomic-habits`, `seven-habits`, `compound-effect`, `miracle-morning`],
  },

  // ─────────────────────────────────────────────
  // 48. The Year of Less
  // ─────────────────────────────────────────────
  {
    slug: `year-of-less`,
    title: `The Year of Less`,
    author: `Cait Flanders`,
    authorBio: `Cait Flanders is a Canadian author and speaker who documented her year-long shopping ban and the personal transformation that followed.`,
    year: 2018,
    pages: 224,
    category: `Personal Development`,
    tags: [`minimalism`, `shopping-ban`, `sobriety`, `intentional-living`, `simplicity`],
    coverColor: `from-blue-300 to-blue-500`,
    coverEmoji: `📉`,
    rating: 4.1,
    readingTime: `9 min read`,
    oneLiner: `A memoir of one woman's year-long shopping ban and the deeper journey of learning what she truly needs versus what she merely wants.`,
    keyTakeaways: [
      `A shopping ban reveals how much of our consumption is emotional rather than practical — we buy to fill voids, not to meet needs.`,
      `Removing the option to buy forces you to be creative, grateful, and intentional with what you already have.`,
      `Less consumption creates more space for self-discovery, relationships, and experiences that actually fulfill.`,
    ],
    summary: [
      `The Year of Less is a memoir about Flanders's decision to stop buying anything non-essential for an entire year. What begins as a financial experiment becomes a deeper exploration of why she consumed — emotionally, materially, and digitally — and what she discovered when she stopped.`,
      `The book is refreshingly honest about the difficulty of the experiment and the emotional triggers behind overconsumption. Flanders weaves her shopping ban story with her journey through sobriety and personal loss, making it a moving, multidimensional account of simplification and self-discovery.`,
    ],
    chapters: [
      { title: `The Ban Begins`, summary: `Flanders sets the rules for her year-long shopping ban and confronts the immediate discomfort of breaking consumption habits.` },
      { title: `What I Discovered`, summary: `She explores the emotional roots of her spending — stress, boredom, social pressure — and what surfaced when buying was no longer an option.` },
      { title: `Life After Less`, summary: `Reflections on what changed permanently after the ban and how consuming less created space for a more intentional life.` },
    ],
    quotes: [
      { text: `I used to think having more would make me happy. It turned out that having less is what finally freed me.`, context: `On the unexpected liberation of consuming less` },
      { text: `The things we buy are often just distractions from the things we need to face.`, context: `On the emotional roots of overconsumption` },
    ],
    whoShouldRead: [
      `Anyone who suspects they spend money on things that don't truly make them happy.`,
      `People considering a minimalism experiment and wanting a relatable, honest guide.`,
      `Readers who enjoy memoirs that blend personal growth with practical lifestyle change.`,
    ],
    relatedBooks: [`essentialism`, `psychology-of-money`, `four-thousand-weeks`, `atomic-habits`],
  },

  // ─────────────────────────────────────────────
  // 49. Make Your Bed
  // ─────────────────────────────────────────────
  {
    slug: `make-your-bed`,
    title: `Make Your Bed`,
    author: `William McRaven`,
    authorBio: `Admiral William McRaven is a retired U.S. Navy four-star admiral and former commander of U.S. Special Operations who oversaw the raid that captured Osama bin Laden.`,
    year: 2017,
    pages: 144,
    category: `Habits & Routines`,
    tags: [`discipline`, `leadership`, `small-wins`, `resilience`, `military`],
    coverColor: `from-blue-700 to-blue-900`,
    coverEmoji: `🛏️`,
    rating: 4.4,
    readingTime: `8 min read`,
    oneLiner: `Ten life lessons from Navy SEAL training — starting with the simplest: make your bed every morning to set the tone for the day.`,
    keyTakeaways: [
      `Making your bed each morning is a small win that creates momentum — if you can't do the little things right, you'll never do the big things right.`,
      `Life is not fair, and you will fail often; the measure of character is how quickly you get back up and keep going.`,
      `In the darkest moments, you must be your very best — that is when leadership and discipline matter most.`,
    ],
    summary: [
      `Make Your Bed is based on McRaven's viral 2014 commencement speech at the University of Texas. He distills his thirty-seven years as a Navy SEAL into ten simple but profound lessons, each illustrated with stories from training, combat, and leadership.`,
      `The lessons are deceptively simple — start your day with a task completed, never quit, stand up to bullies, be your best in your darkest moments — but McRaven's stories give them weight and urgency. It is a short, powerful read that connects military discipline to everyday life.`,
    ],
    chapters: [
      { title: `Start Your Day with a Task Completed`, summary: `McRaven explains why making your bed — the simplest possible win — sets a chain reaction of accomplishment for the rest of the day.` },
      { title: `You Can't Go It Alone`, summary: `He shares stories from SEAL training showing that no one succeeds alone; finding the right team multiplies your capacity.` },
      { title: `Be Your Very Best in the Darkest Moments`, summary: `Lessons from combat on maintaining composure, clarity, and courage when everything is falling apart.` },
    ],
    quotes: [
      { text: `If you want to change the world, start off by making your bed.`, context: `On the power of small daily disciplines` },
      { text: `Life is a struggle and the potential for failure is ever present, but those who live in fear of failure — or hardship or embarrassment — will never achieve their potential.`, context: `On embracing difficulty as the path to growth` },
    ],
    whoShouldRead: [
      `Anyone looking for a short, motivational read grounded in real-world experience.`,
      `Young professionals and students who want foundational life and leadership lessons.`,
      `People who appreciate military discipline translated into civilian life wisdom.`,
    ],
    relatedBooks: [`atomic-habits`, `seven-habits`, `compound-effect`, `miracle-morning`],
  },

  // ─────────────────────────────────────────────
  // 50. Think Like a Rocket Scientist
  // ─────────────────────────────────────────────
  {
    slug: `think-like-rocket-scientist`,
    title: `Think Like a Rocket Scientist`,
    author: `Ozan Varol`,
    authorBio: `Ozan Varol is a former rocket scientist turned law professor and author who applies the thinking strategies of space exploration to everyday problem-solving.`,
    year: 2020,
    pages: 336,
    category: `Decision Making`,
    tags: [`thinking`, `problem-solving`, `innovation`, `first-principles`, `curiosity`],
    coverColor: `from-blue-500 to-indigo-600`,
    coverEmoji: `🚀`,
    rating: 4.4,
    readingTime: `11 min read`,
    oneLiner: `Nine thinking strategies from rocket science that help you tackle impossible problems, make better decisions, and achieve breakthrough results.`,
    keyTakeaways: [
      `First-principles thinking — breaking problems down to their fundamental truths instead of reasoning by analogy — is the rocket scientist's most powerful tool.`,
      `Thought experiments and mental models let you test ideas without the cost of real-world failure, dramatically accelerating innovation.`,
      `Embracing uncertainty and reframing failure as data (not disaster) is what separates breakthrough thinkers from the rest.`,
    ],
    summary: [
      `Think Like a Rocket Scientist translates the problem-solving strategies of aerospace engineers into accessible thinking tools for everyday life. Varol, who worked on the Mars Exploration Rover project, argues that the same mental frameworks that land rovers on Mars can help anyone make better decisions, innovate more boldly, and solve seemingly impossible problems.`,
      `The book is organized around three stages: launch (generating ideas), accelerate (testing and refining them), and achieve (turning them into results). Varol draws on stories from space exploration, business, and science to illustrate each principle, making complex thinking strategies feel practical and achievable.`,
    ],
    chapters: [
      { title: `Launch: First-Principles Thinking`, summary: `Varol explains how to break problems down to their fundamental components rather than relying on assumptions and analogies.` },
      { title: `Accelerate: Thought Experiments`, summary: `He introduces the practice of running mental simulations to test ideas quickly and cheaply before committing resources.` },
      { title: `Achieve: Reframing Failure`, summary: `Strategies for treating failure as data, iterating rapidly, and turning setbacks into stepping stones for breakthrough results.` },
    ],
    quotes: [
      { text: `Rocket scientists don't have bigger brains. They have better thinking tools — and those tools can be learned.`, context: `On democratizing the problem-solving strategies of rocket science` },
      { text: `The opposite of a good idea can also be a good idea. The trick is knowing when to flip your assumptions.`, context: `On the power of contrarian thinking in innovation` },
    ],
    whoShouldRead: [
      `Problem solvers and innovators who want structured thinking tools for tackling complex challenges.`,
      `Leaders and entrepreneurs who need to make high-stakes decisions with imperfect information.`,
      `Anyone fascinated by space exploration who wants to apply its lessons to everyday life.`,
    ],
    relatedBooks: [`deep-work`, `seven-habits`, `essentialism`, `almanack-naval`],
  },
];
