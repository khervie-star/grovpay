import { IconType } from "react-icons/lib";

export interface INavProps {
  name: string;
  path: string;
  icon: IconType;
}

export interface IUploadedFile {
  fileName?: string;
  fileUrl?: string;
  uploadDate?: string;
}

export interface IPropertyData {
  id?: number;
  title?: string;
  buyerLastName?: string;
  buyerFirstName?: string;
  buyerAddress?: string;
  sellerLastName?: string;
  sellerFirstName?: string;
  sellerAddress?: string;
  propertyAddress?: string;
  city?: string;
  lgaOrProvince?: string;
  state?: string;
  country?: string;
  closestLandmark?: string;
  uploadedBy?: string;
  uploaderName?: string;
  uploaderAddress?: string;
  relationshipToParties?: string;
  consentLetterUrl: string;
  userId?: number;
  documents: IPropertyDocument[];
  propertyType?: string;
  approvalStatus?: string;
  rejectionReason?: string;
  mainPropertyImageUrl?: string;
  propertyImageUrl1?: string;
  propertyImageUrl2?: string;
  documentsToResubmit?: string[];
  cost?: string;
  transactionDate?: string;
  propertyTitle?: string;
}
export interface IPropertyDocument {
  documentType?: string;
  documentUrl?: string;
  propertyAssetId?: number;
  id?: number;
}

export interface Coordinate {
  latitude?: number;
  longitude?: number;
  lat?: number;
  lng?: number;
}
