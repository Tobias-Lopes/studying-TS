export const bootstrap = (): void => {
  type Font = 'roboto' | 'open sans';
  type ColorScheme = 'light' | 'dark';
  type Layout = 'one-column' | 'two-column';

  class MyResume implements Resume {
    constructor(
      public fullName: string,
      public email: string,
      public skills: Skill[],
      public font: Font,
      public colorScheme: ColorScheme,
      public layout: Layout,
    ) {}

    addSkill(skill: Skill): boolean {
      const initialLength = this.skills.length;
      this.skills.push(skill);
      return this.skills.length > initialLength;
    }
  }

  const myResume = new MyResume(
    'Tobias',
    'tobias.lopes.712@ufrn.edu',
    [],
    'roboto',
    'light',
    'one-column',
  );

  myResume.addSkill({ name: 'JavaScript', level: 'advanced' });
  myResume.addSkill({ name: 'TypeScript', level: 'advanced' });
  console.log(myResume);
};
