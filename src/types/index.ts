export interface ProfileType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: any;
  bio: any;
  is_superuser: boolean;
  is_staff: boolean;
  image: string;
  cover: string;
  message: string;
  status: number;
}

export interface ErrorResponse {
  detail: string;
  code: string;
  messages: Message[];
}

export interface Message {
  token_class: string;
  token_type: string;
  message: string;
}
