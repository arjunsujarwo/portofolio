export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;

  credentialId?: string;
  image: string;
  credentialUrl?: string;
  documentUrl?: string;
}