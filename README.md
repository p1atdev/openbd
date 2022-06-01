# OpenBD Client for Deno

![Deno JS](https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white)
![Testing](https://github.com/p1atdev/openbd/actions/workflows/test.yml/badge.svg)

OpenBD 書籍情報 API の Deno クライアント

## 使い方

```ts
import { OpenBDClient } from "https://deno.land/x/openbd@v0.1.0/mod.ts";

const client = new OpenBDClient();
// または、
// const client = createOpenBDClient()
// のどちらでも可。正直どっちがいいかわからないから両方置いてある。

// ISBN を指定します。配列で複数渡すことも可能です
const res = await client.searchBookRaw("9784049125207"); // キノの旅XXII the Beautiful World

console.log(res);
```

出力

```
[
  {
    onix: {
      RecordReference: "9784049125207",
      NotificationType: "03",
      ProductIdentifier: { ProductIDType: "15", IDValue: "9784049125207" },
      DescriptiveDetail: {
        ProductComposition: "00",
        ProductForm: "BA",
        ProductFormDetail: "B111",
        Collection: [Object],
        TitleDetail: [Object],
        Contributor: [Array],
        Language: [Array],
        Extent: [Array],
        Subject: [Array],
        Audience: [Array]
      },
      CollateralDetail: { TextContent: [Array], SupportingResource: [Array] },
      PublishingDetail: { Imprint: [Object], Publisher: [Object], PublishingDate: [Array] },
      ProductSupply: { MarketPublishingDetail: [Object], SupplyDetail: [Object] }
    },
    hanmoto: {
      datemodified: "2019-07-10 10:15:58",
      datecreated: "2019-06-08 10:15:02",
      datekoukai: "2019-06-08"
    },
    summary: {
      isbn: "9784049125207",
      title: "キノの旅XXII the Beautiful World",
      volume: "",
      series: "",
      publisher: "ＫＡＤＯＫＡＷＡ",
      pubdate: "20190710",
      cover: "https://cover.openbd.jp/9784049125207.jpg",
      author: "時雨沢恵一／著 黒星紅白／イラスト"
    }
  }
]
```

レスポンスの方定義はありますが、現在 (v0.1.0) 時点では `searchBookRaw`
でレスポンスを取得することしかしていないので、若干扱いにくい部分があるかもしれないです。 ローマ字のキーや、たまに存在しないキーがあったり...
今後対応していきます。
