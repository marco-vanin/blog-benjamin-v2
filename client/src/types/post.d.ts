export interface IPost {
  title: string;
  content: string;
  author: string; // ou ObjectId si tu veux relier à un User
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  imageUrl?: string;
}
