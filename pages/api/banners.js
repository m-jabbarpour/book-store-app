export default function handler(req, res) {
  res.status(200).json(banners);
}

const banners = [
  {
    id: "888d651a-22ab-4576-beea-bc049491c04a",
    category: "blog",
    src: "https://img.taaghche.com/banner/63788486494297080451.jpg?w=500",
  },
  {
    id: "c35c345e-60f4-4e7b-af8c-27ac760ce3cf",
    category: "blog",
    src: "https://img.taaghche.com/banner/63788486489269859349.jpg?w=500",
  },
  {
    id: "f6803826-4630-4396-aa34-f8144da85886",
    category: "blog",
    src: "https://img.taaghche.com/banner/63788486538618374812.jpg?w=500",
  },
  {
    id: "89725651-6f46-449d-b328-47a976e3f199",
    category: "blog",
    src: "https://img.taaghche.com/banner/63788486498326583042.jpg?w=500",
  },
  {
    id: "224c969c-c7ed-461a-bc42-7cb8251e4b1c",
    category: "quote",
    src: "https://img.taaghche.com/banner/63791774295891732191.jpg?w=500",
  },
  {
    id: "54296941-cdac-4fed-84d7-2991b59de0d2",
    category: "quote",
    src: "https://img.taaghche.com/banner/63791774281496116398.jpg?w=500",
  },
  {
    id: "3b9b5caf-ec8c-4710-8f9b-d2c57d8b1c98",
    category: "quote",
    src: "https://img.taaghche.com/banner/63791774268490909968.jpg?w=500",
  },
  {
    id: "9d469f40-3af4-4b83-be8d-2999d57f2bcc",
    category: "quote",
    src: "https://img.taaghche.com/banner/63791774339912146840.jpg?w=500",
  },
  {
    id: "dcaf9777-8758-4446-8647-1b3c5d4db527",
    category: "quote",
    src: "https://img.taaghche.com/banner/6379177433054302754.jpg?w=500",
  },
  {
    id: "d374c33c-ae52-42c2-9e0f-316d1a818232",
    category: "quote",
    src: "https://img.taaghche.com/banner/63791774310193335191.jpg?w=500",
  },
];
