export interface Registration  {
  id: string;
  sessionId: string;
  name: string;
  email: string;
  verifiedEmail: boolean;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}