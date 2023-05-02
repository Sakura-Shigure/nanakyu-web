export interface IntroduceModel {
  name: string;

  contact: {
    facebook?: ContactModel;
    instagram?: ContactModel;
    twitter?: ContactModel;
    youtube?: ContactModel;
    twitch?: ContactModel;
    mail?: ContactModel;
  };
}

interface ContactModel {
  showOnTopbar?: boolean;
  url: string;
}
