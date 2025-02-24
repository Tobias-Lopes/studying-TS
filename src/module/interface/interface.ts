export const bootstrap = (): void => {
  interface Resume {
    fullName: string;
    email: string;
    skills: Skill[];
    addSkill?: (skill: Skill) => boolean;
  }

  interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
  }

  const MyResume: Resume = {
    fullName: 'Tobias',
    email: 'tobias.lopes.712@ufrn.edu',
    skills: [
      { name: 'JavaScript', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
    ],
  };

  console.log(MyResume);
};
