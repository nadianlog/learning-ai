/* =====================================
   DUMMY DATA
   ===================================== */

const DummyData = (() => {
  const sampleUsers = [
    {
      id: 'user_001',
      name: 'John Scholar',
      email: 'john@example.com',
      password: 'password123',
      avatar: '👨‍🎓',
      level: 12,
      xp: 12450,
      streak: 15,
      accuracy: 89,
      questionsSolved: 1248,
      favoriteSubject: 'Math',
      badges: ['algebra-master', 'reading-expert', 'consistent-learner'],
      createdAt: '2026-01-01T00:00:00Z',
    },
    {
      id: 'user_002',
      name: 'Jane Learner',
      email: 'jane@example.com',
      password: 'password123',
      avatar: '👩‍🎓',
      level: 8,
      xp: 5320,
      streak: 7,
      accuracy: 76,
      questionsSolved: 542,
      favoriteSubject: 'Reading',
      badges: ['reading-expert'],
      createdAt: '2026-02-15T00:00:00Z',
    },
  ];

  const sampleQuestions = [
    {
      id: 'q_001',
      subject: 'Math',
      grade: 'PSAT',
      topic: 'Algebra',
      difficulty: 'medium',
      type: 'multiple-choice',
      question: 'What is the value of x in the equation: 2x + 5 = 13?',
      options: ['2', '4', '6', '9'],
      correctAnswer: 1,
      explanation: 'Solving 2x + 5 = 13: 2x = 13 - 5, 2x = 8, x = 4',
      formula: 'x = (13 - 5)/2 = 8/2 = 4',
      createdAt: '2026-01-01T00:00:00Z',
    },
    {
      id: 'q_002',
      subject: 'Math',
      grade: 'PSAT',
      topic: 'Geometry',
      difficulty: 'hard',
      type: 'multiple-choice',
      question: 'What is the area of a circle with radius 5?',
      options: ['15.7', '31.4', '78.5', '157'],
      correctAnswer: 2,
      explanation: 'Using the formula A = πr²: A = π × 5² = π × 25 ≈ 78.5',
      formula: 'A = πr² = π × 5² = 25π ≈ 78.5',
      createdAt: '2026-01-02T00:00:00Z',
    },
    {
      id: 'q_003',
      subject: 'Science',
      grade: 'PSAT',
      topic: 'Biology',
      difficulty: 'easy',
      type: 'essay',
      question: 'Explain the process of photosynthesis.',
      keywords: ['sunlight', 'chlorophyll', 'glucose', 'carbon dioxide', 'oxygen'],
      referenceAnswer: 'Photosynthesis is the process where plants use sunlight, water, and carbon dioxide to produce glucose and oxygen.',
      explanation: 'Photosynthesis occurs in two stages: light reactions and Calvin cycle.',
      createdAt: '2026-01-03T00:00:00Z',
    },
  ];

  const badges = [
    { id: 'algebra-master', name: 'Algebra Master', icon: '🏆', description: 'Solve 50 algebra questions correctly' },
    { id: 'reading-expert', name: 'Reading Expert', icon: '📚', description: 'Achieve 90% accuracy in reading' },
    { id: 'essay-genius', name: 'Essay Genius', icon: '✍️', description: 'Score 100% on 10 essay questions' },
    { id: 'consistent-learner', name: 'Consistent Learner', icon: '🔥', description: 'Maintain a 7-day streak' },
    { id: '100-questions', name: '100 Questions', icon: '💯', description: 'Complete 100 questions' },
    { id: '1000-questions', name: '1000 Questions', icon: '🚀', description: 'Complete 1000 questions' },
  ];

  const initializeDummyData = () => {
    if (!StorageManager.getItem('users')) {
      StorageManager.setItem('users', sampleUsers);
    }
    if (!StorageManager.getItem('questions')) {
      StorageManager.setItem('questions', sampleQuestions);
    }
    if (!StorageManager.getItem('badges')) {
      StorageManager.setItem('badges', badges);
    }
  };

  return {
    sampleUsers,
    sampleQuestions,
    badges,
    initializeDummyData,
  };
})();

// Initialize dummy data on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => DummyData.initializeDummyData());
} else {
  DummyData.initializeDummyData();
}
