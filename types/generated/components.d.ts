import type { Schema, Struct } from '@strapi/strapi';

export interface ContactPointContactPoint extends Struct.ComponentSchema {
  collectionName: 'components_contact_point_contact_points';
  info: {
    displayName: 'contactPoint';
  };
  attributes: {
    email: Schema.Attribute.String;
    telephone: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface IconsIcons extends Struct.ComponentSchema {
  collectionName: 'components_icons_icons';
  info: {
    displayName: 'icons';
  };
  attributes: {
    appleTouchIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    favIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    manifest: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface OgImageOgImage extends Struct.ComponentSchema {
  collectionName: 'components_og_image_og_images';
  info: {
    displayName: 'ogImage';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface OpenGraphOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_open_graph_open_graphs';
  info: {
    description: '';
    displayName: 'openGraph';
  };
  attributes: {
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Component<'og-image.og-image', false>;
    ogTitle: Schema.Attribute.String;
  };
}

export interface OptionalOptional extends Struct.ComponentSchema {
  collectionName: 'components_optional_optionals';
  info: {
    displayName: 'optional';
  };
  attributes: {
    alternateUrls: Schema.Attribute.JSON;
    modifiedTime: Schema.Attribute.String;
    publishTime: Schema.Attribute.String;
  };
}

export interface SchemaSchema extends Struct.ComponentSchema {
  collectionName: 'components_schema_schemata';
  info: {
    displayName: 'schema';
  };
  attributes: {
    address: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Los Angeles, CA, USA'>;
    brand: Schema.Attribute.String & Schema.Attribute.DefaultTo<'kwibal'>;
    city: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Los Angeles'>;
    contactPoint: Schema.Attribute.Component<
      'contact-point.contact-point',
      false
    >;
    contextUrl: Schema.Attribute.String;
    country: Schema.Attribute.String;
    currency: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    Keywords: Schema.Attribute.JSON;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    sameAs: Schema.Attribute.JSON;
    state: Schema.Attribute.String;
    type: Schema.Attribute.String;
    url: Schema.Attribute.String;
    zipcode: Schema.Attribute.String & Schema.Attribute.DefaultTo<'90012'>;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    description: '';
    displayName: 'seo';
  };
  attributes: {
    description: Schema.Attribute.String;
    icons: Schema.Attribute.Component<'icons.icons', false>;
    image: Schema.Attribute.Component<'og-image.og-image', false>;
    keywords: Schema.Attribute.JSON;
    openGraph: Schema.Attribute.Component<'open-graph.open-graph', false>;
    optional: Schema.Attribute.Component<'optional.optional', false>;
    shema: Schema.Attribute.Component<'schema.schema', false>;
    siteName: Schema.Attribute.String;
    title: Schema.Attribute.String;
    twitter: Schema.Attribute.Component<'twitter.twitter', false>;
    url: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface TwitterTwitter extends Struct.ComponentSchema {
  collectionName: 'components_twitter_twitters';
  info: {
    displayName: 'twitter';
  };
  attributes: {
    twitterImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    twitterTitle: Schema.Attribute.String;
    twitterUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact-point.contact-point': ContactPointContactPoint;
      'icons.icons': IconsIcons;
      'og-image.og-image': OgImageOgImage;
      'open-graph.open-graph': OpenGraphOpenGraph;
      'optional.optional': OptionalOptional;
      'schema.schema': SchemaSchema;
      'seo.seo': SeoSeo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'twitter.twitter': TwitterTwitter;
    }
  }
}
