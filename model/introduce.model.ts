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
  description: string[];
  stop_commission?: boolean;
}

interface ContactModel {
  showOnTopbar?: boolean;
  url: string;
}
