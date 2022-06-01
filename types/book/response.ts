export interface Book {
  onix: Onix;
  hanmoto: Hanmoto;
  summary: Summary;
}

/**
 * 版元ドットコム独自項目
 */
export interface Hanmoto {
  toji?: string;
  zaiko?: number;
  maegakinado?: string;
  kaisetsu105w?: string;
  tsuiki?: string;
  genrecodetrc?: number;
  ndccode?: string;
  kankoukeitai?: string;
  sonotatokkijikou?: string;
  jushoujouhou?: string;
  furokusonota?: string;
  dokushakakikomi?: string;
  zasshicode?: string;
  jyuhan?: Jyuhan[];
  hatsubai?: string;
  hatsubaiyomi?: string;
  hastameshiyomi?: boolean;
  author?: Author[];
  datemodified: Date;
  datecreated: Date;
  kanrenshoisbn?: string;
  reviews?: Review[];
  hanmotoinfo?: Hanmotoinfo;
  dateshuppan?: string;
  datekoukai?: Date;
}

export interface Author {
  listseq: number;
  dokujikubun: string;
}

export interface Hanmotoinfo {
  name: string;
  yomi: string;
  url: string;
  twitter: string;
  facebook: string;
}

export interface Jyuhan {
  date: Date;
  ctime: string;
  suri: number;
  comment?: string;
}

export interface Review {
  post_user: string;
  reviewer: string;
  source_id: number;
  kubun_id: number;
  source: string;
  choyukan: string;
  han: string;
  link: string;
  appearance: Date;
  gou: string;
}

/**
 * JPRO-onix準拠項目
 * 詳細: https://jpro.jpo.or.jp/handout/list
 */
export interface Onix {
  /**
   * ISBNコード
   */
  RecordReference: string;
  /**
   * 不明
   */
  NotificationType: string;
  /**
   * 商品識別
   */
  ProductIdentifier: ProductIdentifier;
  /**
   * 商品情報
   */
  DescriptiveDetail: DescriptiveDetail;
  /**
   * 商品付帯項目
   */
  CollateralDetail: CollateralDetail;
  /**
   * 出版社情報
   */
  PublishingDetail: PublishingDetail;
  /**
   * 出版状況等
   */
  ProductSupply: ProductSupply;
}

export interface CollateralDetail {
  /**
   * 内容紹介/目次
   */
  TextContent: TextContent[];
  /**
   * 画像
   */
  SupportingResource: SupportingResource[];
}

export interface SupportingResource {
  ResourceContentType: string;
  ContentAudience: string;
  ResourceMode: string;
  ResourceVersion: ResourceVersion[];
}

export interface ResourceVersion {
  ResourceForm: string;
  ResourceVersionFeature: ResourceVersionFeature[];
  /**
   * 画像パス
   */
  ResourceLink: string;
}

export interface ResourceVersionFeature {
  ResourceVersionFeatureType: string;
  FeatureValue: string;
}

export interface TextContent {
  TextType: string;
  ContentAudience: string;
  Text: string;
}

export interface DescriptiveDetail {
  /**
   * セット商品分売可否
   */
  ProductComposition: string;
  /**
   * 判型
   */
  ProductForm: string;
  /**
   * 判型詳細
   */
  ProductFormDetail?: string;
  /**
   * 商品名情報
   */
  TitleDetail: DescriptiveDetailTitleDetail;
  /**
   * 著者情報
   */
  Contributor: Contributor[];
  /**
   * 言語
   */
  Language: Language[];
  /**
   * ページ数
   */
  Extent: Extent[];
  /**
   * Cコード/ジャンルコード/キーワード
   */
  Subject?: Subject[];
  /**
   * シリーズ物等の情報
   */
  Collection?: Collection;
  /**
   * 読者対象/成人指定
   */
  Audience?: Audience[];
  EditionType?: string;
  EditionStatement?: string;
  /**
   * 判型(実寸)
   */
  Measure?: Measure[];
}

export interface Audience {
  AudienceCodeType: string;
  AudienceCodeValue: string;
}

export interface Collection {
  CollectionType: string;
  CollectionSequence: CollectionSequence;
  /**
   * シリーズ名/レーベル名
   */
  TitleDetail: CollectionTitleDetail;
  CollectionSequenceArray: CollectionSequence[];
}

export interface CollectionSequence {
  CollectionSequenceType: string;
  CollectionSequenceTypeName: string;
  CollectionSequenceNumber: string;
}

export interface CollectionTitleDetail {
  TitleType: string;
  TitleElement: TitleElementElement[];
}

export interface TitleElementElement {
  TitleElementLevel: string;
  TitleText: PersonName;
}

export interface PersonName {
  collationkey?: string;
  content: string;
}

export interface Contributor {
  SequenceNumber: string;
  /**
   * 著者区分
   */
  ContributorRole: string[];
  /**
   * 著者名
   */
  PersonName: PersonName;
  /**
   * 著者略歴
   */
  BiographicalNote?: string;
}

export interface Extent {
  ExtentType: string;
  ExtentValue: string;
  ExtentUnit: string;
}

export interface Language {
  LanguageRole: string;
  LanguageCode: string;
  CountryCode?: string;
}

export interface Measure {
  MeasureType: string;
  Measurement: string;
  MeasureUnitCode: string;
}

export interface Subject {
  MainSubject?: string;
  SubjectSchemeIdentifier: string;
  SubjectCode: string;
}

export interface DescriptiveDetailTitleDetail {
  TitleType: string;
  TitleElement: PurpleTitleElement;
}

export interface PurpleTitleElement {
  TitleElementLevel: string;
  TitleText: PersonName;
  Subtitle?: PersonName;
  PartNumber?: string;
}

export interface ProductIdentifier {
  /**
   * 	ISBNコード
   */
  ProductIDType: string;
  IDValue: string;
}

export interface ProductSupply {
  MarketPublishingDetail?: MarketPublishingDetail;
  SupplyDetail: SupplyDetail;
}

export interface MarketPublishingDetail {
  MarketPublishingStatus: string;
  MarketPublishingStatusNote?: string;
}

export interface SupplyDetail {
  ProductAvailability: string;
  /**
   * 価格情報
   */
  Price?: Price[];
}

export interface Price {
  PriceType: string;
  PriceAmount: string;
  CurrencyCode: string;
}

export interface PublishingDetail {
  /**
   * 発行元出版社
   */
  Imprint: Imprint;
  /**
   * 発売予定日等
   */
  PublishingDate: PublishingDate[];
  /**
   * 発売元出版社
   */
  Publisher?: Publisher;
}

export interface Imprint {
  ImprintIdentifier?: ImprintIdentifier[];
  ImprintName: string;
}

export interface ImprintIdentifier {
  ImprintIDType: string;
  IDValue: string;
}

export interface Publisher {
  PublishingRole: string;
  PublisherIdentifier: PublisherIdentifier[];
  PublisherName: string;
}

export interface PublisherIdentifier {
  PublisherIDType: string;
  IDValue: string;
}

export interface PublishingDate {
  PublishingDateRole: string;
  Date: string;
}

export interface Summary {
  isbn: string;
  title: string;
  volume: string;
  series: string;
  publisher: string;
  pubdate: string;
  cover: string;
  author: string;
}
