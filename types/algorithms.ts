export interface AlgorithmCategory {
  id: string;
  name: string;
  description: string;
  algorithms: Algorithm[];
}

export interface Algorithm {
  id: string;
  name: string;
  description: string;
  category: string;
  complexity: {
    time: string;
    space: string;
  };
  implementation: string;
  visualizationTypes: ('2d' | '3d' | 'tree' | 'graph')[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface DynamicProgrammingProblem {
  id: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  implementation: string;
  visualizationType: '2d' | '3d' | 'table';
  testCases: {
    input: any;
    output: any;
  }[];
}

export interface GraphAlgorithm {
  id: string;
  name: string;
  description: string;
  type: 'pathfinding' | 'spanning-tree' | 'flow' | 'matching';
  complexity: {
    time: string;
    space: string;
  };
  implementation: string;
  visualizationType: 'graph' | '3d';
}

export interface TreeAlgorithm {
  id: string;
  name: string;
  description: string;
  type: 'balancing' | 'traversal' | 'construction';
  complexity: {
    time: string;
    space: string;
  };
  implementation: string;
  visualizationType: 'tree' | '3d';
}

export interface NetworkFlowAlgorithm {
  id: string;
  name: string;
  description: string;
  complexity: {
    time: string;
    space: string;
  };
  implementation: string;
  visualizationType: 'graph' | '3d';
}

export interface StringMatchingAlgorithm {
  id: string;
  name: string;
  description: string;
  complexity: {
    time: string;
    space: string;
  };
  implementation: string;
  visualizationType: '2d' | 'table';
}

export interface UserProgress {
  userId: string;
  completedAlgorithms: string[];
  achievements: Achievement[];
  savedCode: SavedCode[];
  visualizationPreferences: VisualizationPreferences;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  criteria: string;
  icon: string;
  unlockedAt?: Date;
}

export interface SavedCode {
  id: string;
  algorithmId: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

export interface VisualizationPreferences {
  defaultStyle: '2d' | '3d';
  animationSpeed: number;
  colorScheme: string;
  showStepDetails: boolean;
}

export interface CommunityFeature {
  algorithmId: string;
  userId: string;
  type: 'comment' | 'solution' | 'question';
  content: string;
  createdAt: Date;
  likes: number;
  replies: CommunityFeature[];
}