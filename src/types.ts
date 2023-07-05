export interface ServiceCardInfoType {
  id: number;
  title: string;
  pledge: number | null;
  content: string;
  placesLeft: number | null;
  isOutOfStock: boolean;
}
