export interface IntroduceModel {
  name: string;
  logo: string | undefined;
  contact: {
    facebook?: ContactModel;
    instagram?: ContactModel;
    twitter?: ContactModel;
    youtube?: ContactModel;
    twitch?: ContactModel;
    discord?: string;
    mail?: ContactModel;
  };
  description: string[];
  stop_commission?: boolean;
}

interface ContactModel {
  showOnTopbar?: boolean;
  url: string;
}
