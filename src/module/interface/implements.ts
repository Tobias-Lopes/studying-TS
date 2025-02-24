export const bootstrap = (): void => {
  interface Resume {
    fullName: string;
    email: string;
    skills: Skill[];
    addSkill: (skill: Skill) => boolean;
  }

  interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
  }

  interface Resume {
    dateOfBirth?: Date;
    sumary?: string;
  }

  class MyResume implements Resume {
    constructor(
      public fullName: string,
      public email: string,
      public skills: Skill[],
    ) {}

    addSkill(skill: Skill): boolean {
      const initialLength = this.skills.length;
      this.skills.push(skill);
      return this.skills.length > initialLength;
    }
  }

  const myResume = new MyResume('Tobias', 'tobias.lopes.712@ufrn.edu', []);

  myResume.addSkill({ name: 'JavaScript', level: 'advanced' });
  myResume.addSkill({ name: 'TypeScript', level: 'advanced' });
  console.log(myResume);

  /*
  const MyResume: Resume = {
    fullName: 'Tobias',
    email: 'tobias.lopes.712@ufrn.edu',
    skills: [
      { name: 'JavaScript', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
    ],
  };

  console.log(MyResume);
  */
};
