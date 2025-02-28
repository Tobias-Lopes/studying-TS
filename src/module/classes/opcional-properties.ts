export const bootstrap = (): void => {
  class User {
    constructor(
      private name: string,
      private age: number,
      private bio?: string,
    ) {}

    setBio(bio: string): void {
      this.bio = bio;
    }

    getBio(): string {
      return this.bio || 'Biografia Indisponível';
    }
  }

  const user = new User('Joana', 35);
  console.log(user.getBio());

  user.setBio('Programadora e entusiasta de tecnologia');
  console.log(user.getBio());
};
