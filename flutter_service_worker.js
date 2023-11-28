'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "59e851fcf337f34d2930335c7bf841b0",
"assets/AssetManifest.json": "44977e05d5623e143c63879ef7f921f2",
"assets/assets/coins/1.png": "30b1aac1620a457138136a0a73e0836c",
"assets/assets/coins/10.png": "1bcdf849cf12a9b5c7eb33580424fd89",
"assets/assets/coins/100.png": "f4d69bd26991447499f4ab10458401cc",
"assets/assets/coins/101.png": "9d334bca16473f7fc33b6c29b1f4c753",
"assets/assets/coins/102.png": "1fee626ae1312b4b42a5766c8298bc8b",
"assets/assets/coins/103.png": "1fee626ae1312b4b42a5766c8298bc8b",
"assets/assets/coins/104.png": "3e9e512a5ce7f0973688c53f7b6a2b13",
"assets/assets/coins/105.png": "691c11a1e0e8611db69393aed7a44b20",
"assets/assets/coins/106.png": "691c11a1e0e8611db69393aed7a44b20",
"assets/assets/coins/107.png": "5d73136b856ad40de89647a7a23749ce",
"assets/assets/coins/108.png": "6abe4a062df248382ddbe5bd8aebcf35",
"assets/assets/coins/109.png": "3153910dee45b45d161c551c424528e5",
"assets/assets/coins/11.png": "856bfdb63dc0d6fad6b92fc6a29719e1",
"assets/assets/coins/110.png": "3153910dee45b45d161c551c424528e5",
"assets/assets/coins/112.png": "ce8a9511e6c4597dedc09cefcda1599b",
"assets/assets/coins/113.png": "cf33c54fe8da628e50eaf18652d919b5",
"assets/assets/coins/114.png": "19623fcde0b3075dfe78d8f03289b470",
"assets/assets/coins/115.png": "5aabecf6a54b72e338c63d00570c2a43",
"assets/assets/coins/116.png": "eb5c31ecfb68e95d9f432449b3b4b8f5",
"assets/assets/coins/118.png": "ff41dff3d96d8e7522a141b8af475d97",
"assets/assets/coins/119.png": "047f4c546595f7736bcc886fc6e323d8",
"assets/assets/coins/12.png": "24c244a9b134b0b20dc773ff3205ceff",
"assets/assets/coins/120.png": "24a28f2fdec49d52c401deea5d9a229b",
"assets/assets/coins/121.png": "24a28f2fdec49d52c401deea5d9a229b",
"assets/assets/coins/122.png": "58fbe3ecb9607db968bcac96f6d6d75a",
"assets/assets/coins/123.png": "63034168f23a0e9ab99767714a8b9624",
"assets/assets/coins/124.png": "de0671a2d4c7a9fef3d60ad95eb249b3",
"assets/assets/coins/125.png": "103a854bc7bfb6a3b8a82877c6a7844f",
"assets/assets/coins/126.png": "d22aa8065b7ae533246584a088ad7639",
"assets/assets/coins/127.png": "55f2b857509567fc5ad80a37f3124617",
"assets/assets/coins/128.png": "c9cc716b5ba4e45f8232811af4be1cfb",
"assets/assets/coins/129.png": "c9cc716b5ba4e45f8232811af4be1cfb",
"assets/assets/coins/13.png": "5412408f27f9b6cc4a4167045e59bb74",
"assets/assets/coins/130.png": "3671297c1d0e71cdf918cd4a713fe8ed",
"assets/assets/coins/131.png": "62a7e194986760630d1d748f8f2e6d40",
"assets/assets/coins/132.png": "03e5f0a0dba558eeb0d38c1776e9a8a7",
"assets/assets/coins/133.png": "fda67e894c1df51418919681d121b94b",
"assets/assets/coins/134.png": "f8daa9fede449816302c97dc4be6f41b",
"assets/assets/coins/135.png": "5a0244eff8739289f1edce6f139242ef",
"assets/assets/coins/136.png": "5a0244eff8739289f1edce6f139242ef",
"assets/assets/coins/137.png": "d986ace83162e98c1688e25aae58e7ba",
"assets/assets/coins/138.png": "2cc1f0b0b5114f9df05074d9a47661d8",
"assets/assets/coins/139.png": "2cc1f0b0b5114f9df05074d9a47661d8",
"assets/assets/coins/14.png": "13c747ffb93ed352d7a5447af7d1a4c9",
"assets/assets/coins/140.png": "0557b8ef46e1729f344d480b9752ffac",
"assets/assets/coins/141.png": "0557b8ef46e1729f344d480b9752ffac",
"assets/assets/coins/142.png": "a7bea4b079f44badfe744d75133c25ce",
"assets/assets/coins/143.png": "1bcfd463f68fd1c3f76f23f33fa89d7f",
"assets/assets/coins/144.png": "723b75d345b95a471ab63bb9f78b7dda",
"assets/assets/coins/145.png": "723b75d345b95a471ab63bb9f78b7dda",
"assets/assets/coins/146.png": "cb63e9a77c770f1d922af4daa38f7ab3",
"assets/assets/coins/147.png": "54a9239cbb8db159babf20ed620f2f2a",
"assets/assets/coins/148.png": "3a0dad10ae0bd9c42b2ef6c79b67a6bf",
"assets/assets/coins/149.png": "3a0dad10ae0bd9c42b2ef6c79b67a6bf",
"assets/assets/coins/15.png": "eacb70db5c0c65e1115ce5a63103fa84",
"assets/assets/coins/150.png": "910fbce89b32f415b84a9c8088bb8921",
"assets/assets/coins/151.png": "00fc12048b1b2cbc682522c9a9ae67ed",
"assets/assets/coins/152.png": "8afe1a8b95f5c3e7f4ebd8782613f4da",
"assets/assets/coins/153.png": "0757ecebe5640161d2a040343a3c8528",
"assets/assets/coins/154.png": "69141c8da78e9d07ce5cbf9222e70b4c",
"assets/assets/coins/155.png": "525b8ee4ed11e3ea423245668606e22e",
"assets/assets/coins/156.png": "8b6c93d5a31983d341fdc52aff464dbe",
"assets/assets/coins/157.png": "5e70a562a188dc9587c258850ffa4faa",
"assets/assets/coins/158.png": "57b269231bc77d6051b2b04b2b54460c",
"assets/assets/coins/159.png": "57b269231bc77d6051b2b04b2b54460c",
"assets/assets/coins/16.png": "24b4c2e809ef3c52e4000cd277bedfa2",
"assets/assets/coins/160.png": "06379ab69d6bb02564e4c6f400ed283b",
"assets/assets/coins/161.png": "cb0f40858c5e89702766eced76f0884d",
"assets/assets/coins/162.png": "cb0f40858c5e89702766eced76f0884d",
"assets/assets/coins/163.png": "323c1c01a0d20ddd8e7d5a3815ed4dae",
"assets/assets/coins/164.png": "34f8d155adb4d6e20afe8fd2183affbd",
"assets/assets/coins/165.png": "34f8d155adb4d6e20afe8fd2183affbd",
"assets/assets/coins/166.png": "63cfaeeba2d272fa87e4e17bf9e5cc3b",
"assets/assets/coins/167.png": "93c9787ece2ae800be7f1c16d118f4cf",
"assets/assets/coins/168.png": "93c9787ece2ae800be7f1c16d118f4cf",
"assets/assets/coins/169.png": "1e8f66894c5f6b9ef02b612f5a1169e2",
"assets/assets/coins/170.png": "1e8f66894c5f6b9ef02b612f5a1169e2",
"assets/assets/coins/171.png": "2f57b38e51536f1090b0c86d59455401",
"assets/assets/coins/172.png": "2f57b38e51536f1090b0c86d59455401",
"assets/assets/coins/173.png": "55f8d7c4dd3fd0a2d5fddd6818cfe9ba",
"assets/assets/coins/174.png": "a15b7b51aa37167f7e1a5b56583df74c",
"assets/assets/coins/175.png": "cd1fab80e841166203f3c8ba9de14fec",
"assets/assets/coins/176.png": "93035f0793516ae8ad804f16fa9d9e46",
"assets/assets/coins/178.png": "d957c74fc2e2fb158fecc3f1c097e9c7",
"assets/assets/coins/179.png": "d957c74fc2e2fb158fecc3f1c097e9c7",
"assets/assets/coins/180.png": "844c00b97e4417f3ae36f7d23a69409a",
"assets/assets/coins/181.png": "701601b362a2a1598b4fc3104237a144",
"assets/assets/coins/182.png": "b60c0773fda2e43daa5f5c4f0ab19684",
"assets/assets/coins/183.png": "b60c0773fda2e43daa5f5c4f0ab19684",
"assets/assets/coins/184.png": "dd60339f1f8f903c3fb77c0430bbbd27",
"assets/assets/coins/185.png": "f31b818f1a732dc2aaf98cfe34c19182",
"assets/assets/coins/186.png": "d1289051315e7ba461b0712ff5d0289d",
"assets/assets/coins/187.png": "56a052841c2423cc26685e1b08af3891",
"assets/assets/coins/188.png": "56a052841c2423cc26685e1b08af3891",
"assets/assets/coins/189%255D.png": "babecb32ffb8db2605e179e9339a16a5",
"assets/assets/coins/190.png": "bd26dadd64b2e188e7480ecde334d0b9",
"assets/assets/coins/191.png": "bd26dadd64b2e188e7480ecde334d0b9",
"assets/assets/coins/192.png": "cebcac466354cf51b7abf25b6258e922",
"assets/assets/coins/193.png": "cebcac466354cf51b7abf25b6258e922",
"assets/assets/coins/194.png": "3898f19422f8f000ba166773b2e8a1a3",
"assets/assets/coins/195.png": "3898f19422f8f000ba166773b2e8a1a3",
"assets/assets/coins/196.png": "2afd84224e23dbb0a0b06a344affda61",
"assets/assets/coins/197.png": "f1dcdf43569ddf8f2976460b02f23b7a",
"assets/assets/coins/198.png": "a76eb4393037423b9eeddcb9b0415259",
"assets/assets/coins/199.png": "2aebb8a01b21c1eb8f3b956f1d78b064",
"assets/assets/coins/20.png": "9845fbc1e99007b9d0afdfeedc848cde",
"assets/assets/coins/200.png": "2aebb8a01b21c1eb8f3b956f1d78b064",
"assets/assets/coins/201.png": "06e48ad0410c54a33be377308c1a0e51",
"assets/assets/coins/202.png": "ae841c868a6714476a723ffbcad80a1c",
"assets/assets/coins/203.png": "b65abe21adb4e02395094ca93fdb3920",
"assets/assets/coins/204.png": "1e9b586dc54d9375e4f90a6b3ac9af8f",
"assets/assets/coins/205.png": "e21098bd2962e05eae941fd2d4cc1507",
"assets/assets/coins/206.png": "e21098bd2962e05eae941fd2d4cc1507",
"assets/assets/coins/207.png": "024ec161d8951c5ba42e94d3cdb20965",
"assets/assets/coins/208.png": "07b83e6d681c211f58d9f051c00c86ab",
"assets/assets/coins/209.png": "9287932a660743a4e602b60b7c06c044",
"assets/assets/coins/21.png": "f4b752800794138149beed6619bddbff",
"assets/assets/coins/210.png": "abbaf28708e88c936c18547819447e09",
"assets/assets/coins/211.png": "bf1df7795129a8da0f445215359785ad",
"assets/assets/coins/212.png": "095c116c0c40ef7ca6e94e78bf5fad48",
"assets/assets/coins/213.png": "3aeaa9b9fe2661dd87935ca2812305d2",
"assets/assets/coins/214.png": "5a5e8aae3baa57e400282e838f9e3777",
"assets/assets/coins/215.png": "c4ca267668a262096c944e2a7ab06c98",
"assets/assets/coins/216.png": "e7373062be6e0e064ffaf113a6d2478a",
"assets/assets/coins/217.png": "e7373062be6e0e064ffaf113a6d2478a",
"assets/assets/coins/218.png": "67cc78f2c8ff078fa6c07a0fb0a6a521",
"assets/assets/coins/219.png": "d65e96de887246ea07dd8443ebf2d360",
"assets/assets/coins/22.png": "9b8e45ca9c75b32f516b745de44c2f2c",
"assets/assets/coins/220.png": "b88605adecb5e2a4fdc10015e85f3ee5",
"assets/assets/coins/221.png": "ef42eefb12097940772a0ee75482302a",
"assets/assets/coins/222.png": "82158bfdceb080de617aee92dec705dc",
"assets/assets/coins/223.png": "88d162d0bf3e080604314e576b1ec0fe",
"assets/assets/coins/224.png": "88d162d0bf3e080604314e576b1ec0fe",
"assets/assets/coins/225.png": "ef098457c1c17a537b3d6911f4a77ad6",
"assets/assets/coins/226.png": "ef098457c1c17a537b3d6911f4a77ad6",
"assets/assets/coins/227.png": "56d45c7e4ad7df9e50b9255494410f16",
"assets/assets/coins/228.png": "56d45c7e4ad7df9e50b9255494410f16",
"assets/assets/coins/229.png": "765d8655f9115aa1d6cc014d5cca8dfd",
"assets/assets/coins/23.png": "e23e4098537c8ab2ac0f8e6320f2f812",
"assets/assets/coins/230.png": "765d8655f9115aa1d6cc014d5cca8dfd",
"assets/assets/coins/231.png": "8fe611b32e51a789860f80ca843cb5a5",
"assets/assets/coins/232.png": "ae347de7449592cc6940dc4959141803",
"assets/assets/coins/233.png": "dbfd43adc4fd533575db1437bcf44d55",
"assets/assets/coins/234.png": "665cc71e1c3e65d634a30aa37d37cc8e",
"assets/assets/coins/235.png": "69fbb06837a1a7ea9f02800c457e35f1",
"assets/assets/coins/236.png": "70aa5d7024cce98d1d850e913257e10c",
"assets/assets/coins/237.png": "3a9e88c16b8d18af02c87563902bd4cc",
"assets/assets/coins/238.png": "1d91c71d595cf9f151b007925307e412",
"assets/assets/coins/239.png": "3b3e65415da30f31e3664b01287cfeca",
"assets/assets/coins/24.png": "980c89e89aeee1fb14ceabb6bf607645",
"assets/assets/coins/240.png": "de41492579776fcf4e40f36cd8b07944",
"assets/assets/coins/241.png": "4ae34e9094b33d58d7ca25a4d4b84736",
"assets/assets/coins/242.png": "b0bea799bde35b97d4b179f71ed1f7b9",
"assets/assets/coins/243.png": "338e5510abbed17a5d33d7508059bd44",
"assets/assets/coins/244.png": "b123e9b552cf03d8968b0cff47c70967",
"assets/assets/coins/245.png": "b123e9b552cf03d8968b0cff47c70967",
"assets/assets/coins/246.png": "f453b9aa0c1b7b2d36daed40f0791edd",
"assets/assets/coins/247.png": "c34cec0c4f6b2af00cbf1b67a4f6c0cd",
"assets/assets/coins/248.png": "8e63dffb453ad5bce67b404bf41e2efc",
"assets/assets/coins/249.png": "8935c4fbf3a667f30698ab73977b8dae",
"assets/assets/coins/25.png": "08a610ebacea5d685566e620ff894a15",
"assets/assets/coins/250.png": "bb4c6942cf17af55f9af4c285c3de038",
"assets/assets/coins/251.png": "ebc5595c325fe057eaea0c61d7ee9e10",
"assets/assets/coins/252.png": "3e46c4ee45161c424e43bf6eb2920fe4",
"assets/assets/coins/253.png": "02cecc5c94e531d559a3cf80803c784b",
"assets/assets/coins/254.png": "efd36724d5987f71b3f6fd218ba59595",
"assets/assets/coins/255.png": "18f5da690b9de4a6253e68cae19450d3",
"assets/assets/coins/256.png": "5632fbd61b66ad19337975706472f0d3",
"assets/assets/coins/257.png": "7adb1cdf399d94e9002390b5973a98ea",
"assets/assets/coins/258.png": "7adb1cdf399d94e9002390b5973a98ea",
"assets/assets/coins/259.png": "6db6612276eadaf04bd7caddbbbb3f27",
"assets/assets/coins/26.png": "98702fa0e6271df9590d6173319ca974",
"assets/assets/coins/260.png": "92f8cfdd2895d3dc906b7e550c0e32fe",
"assets/assets/coins/261.png": "92f8cfdd2895d3dc906b7e550c0e32fe",
"assets/assets/coins/262.png": "5cde0406ce08f30333f49e015503d16b",
"assets/assets/coins/263.png": "7affe4bd76669b169cca5be0ef2a0912",
"assets/assets/coins/264.png": "dbbe98d1a2e993f80095222f0e82b78c",
"assets/assets/coins/265.png": "dbbe98d1a2e993f80095222f0e82b78c",
"assets/assets/coins/266.png": "6cfbaa0dac8726324758f7fa96522c72",
"assets/assets/coins/267.png": "6cfbaa0dac8726324758f7fa96522c72",
"assets/assets/coins/268.png": "78e3dc9850919524a8575f76e1651372",
"assets/assets/coins/269.png": "78e3dc9850919524a8575f76e1651372",
"assets/assets/coins/27.png": "690ff9abb30d48168db713feb1869099",
"assets/assets/coins/270.png": "cb3e2fb99fc6524bec942194c372d6f4",
"assets/assets/coins/28.png": "508ec60ba782c72806c376dcde4096be",
"assets/assets/coins/29.png": "cc1bd814055180511460d6437f898912",
"assets/assets/coins/3.png": "bdaeb947a2eb31bae0a170559df9013c",
"assets/assets/coins/30.png": "2134c9bbdc0c0858f5a94fd2ab2de902",
"assets/assets/coins/31.png": "b8675e2d5423f6187fe4cac88eeeb0ac",
"assets/assets/coins/32.png": "01e4162ab2521e117197c785547cc821",
"assets/assets/coins/33.png": "f222c8be0475292b2a23a82ff93ac496",
"assets/assets/coins/34.png": "8c43b409ffb53d5f56fdf1fc5de04417",
"assets/assets/coins/35.png": "a92a542f9012637e8dd18c43403c145e",
"assets/assets/coins/4.png": "59739e40de684418e877b9357691634e",
"assets/assets/coins/40.png": "955f08a2338aba5cfe85f366e71153af",
"assets/assets/coins/42.png": "1cf37c9a97ab4cdcc5501065b34ac3b6",
"assets/assets/coins/43.png": "9845fbc1e99007b9d0afdfeedc848cde",
"assets/assets/coins/44.png": "d3a6f82f3d21b2ab1b671279b1d94aa5",
"assets/assets/coins/45.png": "5aae7352652329629fdbc3c9f5015211",
"assets/assets/coins/46.png": "5aae7352652329629fdbc3c9f5015211",
"assets/assets/coins/47.png": "786f8f4d2d1a5e95bc69d434d3326dff",
"assets/assets/coins/5.png": "adb4b9e91c97e504575add8220d33169",
"assets/assets/coins/50.png": "4691c6c91ccfdfef6bd7b86a4a3463b4",
"assets/assets/coins/51.png": "d3a6f82f3d21b2ab1b671279b1d94aa5",
"assets/assets/coins/52.png": "e13c0675b419d6c6a1416acc5ae1908e",
"assets/assets/coins/53.png": "75ba198d072ec1b6b0dbb009272ad6f8",
"assets/assets/coins/54.png": "e23a41a52da5b4897a571ac706d9e179",
"assets/assets/coins/55.png": "cdba52dfe2fbed541a31a7bff4225601",
"assets/assets/coins/56.png": "ab1f99662d9ae29acc6e251cf3460f9e",
"assets/assets/coins/57.png": "51ad315342476664796306ffe52a62b8",
"assets/assets/coins/58.png": "46da0f81ab48e16b7c368f949e2366a6",
"assets/assets/coins/59.png": "46da0f81ab48e16b7c368f949e2366a6",
"assets/assets/coins/6.png": "bb76509de01e8931338b334d736aca44",
"assets/assets/coins/61.png": "be06134d9053db900d3f7a45f850c40f",
"assets/assets/coins/62.png": "ee6fbdd82d0bed6e432b00a2f664b155",
"assets/assets/coins/63.png": "0fd838f01dcbb08b69cdb2a6c59f3211",
"assets/assets/coins/64.png": "256d6bf7595db606a12e746a681b8e0d",
"assets/assets/coins/65.png": "a65e557c5fd75e5b15d063902332035b",
"assets/assets/coins/66.png": "cb06c729c571feb0f4234bf273a0490f",
"assets/assets/coins/67.png": "739797800c1ad83ba9a3cdddb9824693",
"assets/assets/coins/68.png": "16ed9df8fecfd4341548e3df772f9e47",
"assets/assets/coins/7.png": "a65e557c5fd75e5b15d063902332035b",
"assets/assets/coins/77.png": "6ebb74024bcdbe3ea9975e9fcc05f115",
"assets/assets/coins/78.png": "ec9a6e24c2124512c5644b7e56a4b954",
"assets/assets/coins/79.png": "bcbd938055c345b6a685e8e349284188",
"assets/assets/coins/8.png": "8c50704bae428e3fb1612f5a42892c1e",
"assets/assets/coins/80.png": "75b3c45ef164f2b7171398981be209f9",
"assets/assets/coins/81.png": "a6b588ec5930b2a1389437922e7af9a9",
"assets/assets/coins/82.png": "8b3c5ae4358245fb82d34a5d061e8af7",
"assets/assets/coins/83.png": "ef42eefb12097940772a0ee75482302a",
"assets/assets/coins/84.png": "5a3d55465e3a2f5b127c4e0ebe68bd21",
"assets/assets/coins/85.png": "c85c9802a7789743454f7f3b30ad59b9",
"assets/assets/coins/87.png": "c85c9802a7789743454f7f3b30ad59b9",
"assets/assets/coins/88.png": "2546a65505fb2060eff3b9d00cea37ab",
"assets/assets/coins/89.png": "2546a65505fb2060eff3b9d00cea37ab",
"assets/assets/coins/9.png": "2c11ba1971885e160fa79c2792be322c",
"assets/assets/coins/90.png": "13c747ffb93ed352d7a5447af7d1a4c9",
"assets/assets/coins/91.png": "9710d2fab18e548b62ee9a447b8baace",
"assets/assets/coins/92.png": "24b4c2e809ef3c52e4000cd277bedfa2",
"assets/assets/coins/93.png": "4c5bbcfafc36dc0adf9185a1de527299",
"assets/assets/coins/94.png": "e997990daab16faf5734f6a0f6c7af99",
"assets/assets/coins/95.png": "8c50704bae428e3fb1612f5a42892c1e",
"assets/assets/coins/96.png": "0ce1d89aed8b9775eab85e10e3e0cbfc",
"assets/assets/coins/97.png": "8662440b1ed7c38d0d53c5a0f57c27e9",
"assets/assets/coins/98.png": "0839aba7ee4ba19b45be63369a57f933",
"assets/assets/coins/99.png": "f4d69bd26991447499f4ab10458401cc",
"assets/assets/fonts/Roboto-Medium.ttf": "b21ffa747200921845e38910b8ea97c0",
"assets/assets/fonts/Yekan.ttf": "d26ebd09d8af91797d5a577347fdc3ae",
"assets/assets/icons/arrowD.svg": "847cd74860009522439d039df3c5687f",
"assets/assets/icons/arrowM.svg": "92a85f30b31df51cc1d880ed8af0c12f",
"assets/assets/icons/arrowT.svg": "af863a070a17ef68a444c62448f6373e",
"assets/assets/icons/arrow_back.svg": "463ba1a5b634b77cf00dec64c1a68379",
"assets/assets/icons/Bg.svg": "91a25c20d0030b69e998dcb627cca8c6",
"assets/assets/icons/bitcoin.svg": "e5c91521ac360609fd146b75deb43102",
"assets/assets/icons/bnb.svg": "f659f7c80e93099e542c64253eee08f2",
"assets/assets/icons/body.svg": "c7fa11b54776bf6cb5ee89d69843f95c",
"assets/assets/icons/busd.svg": "6c26536e1c8dd58c5ad9ac7a0290749d",
"assets/assets/icons/catH.svg": "e295c37b1d585771c05f49c1eb9eb104",
"assets/assets/icons/chainlink.svg": "c00fb4a224023bfab78670c87f78accf",
"assets/assets/icons/chart.png": "cb96fb4b0b2879e0edfb4c0817804c5c",
"assets/assets/icons/checkbox.svg": "056bd7821242fecbe501f9a225d47833",
"assets/assets/icons/checkboxF.svg": "a1a67b333d1224a4144dbdd3b5bdcfa3",
"assets/assets/icons/contactS.svg": "fe2691f5acd950e062ce6bf3b56e584e",
"assets/assets/icons/copy.svg": "ef418a5bf71ad70dd2a8219192b79e76",
"assets/assets/icons/emailS.svg": "72bac90f0bbff7ab47e8102b4f047201",
"assets/assets/icons/ethereum.svg": "e26b08c52d0b23173b800e53a0313a63",
"assets/assets/icons/filter.svg": "2c5e49daba68ecc8c951961310a15211",
"assets/assets/icons/fingerprintS.svg": "174d61af69710a6ebf474cc948c1c525",
"assets/assets/icons/helpS.svg": "8cf3c5fb9f957a480523344c4564ec7d",
"assets/assets/icons/Illustration1.svg": "cd3419209681fb56d73a550a63efa6e3",
"assets/assets/icons/Illustration2.svg": "299802051c6133e88e8de39d71674515",
"assets/assets/icons/Illustration3.svg": "035dfec1c82d1f92e99a5d5665bc8d72",
"assets/assets/icons/insurance.svg": "41f5b0c22f69d5daa56392f9cd405d7c",
"assets/assets/icons/logommd.svg": "1eb473fbe75e3d1c8a8127b819aaa3fa",
"assets/assets/icons/menu.svg": "94aec19d09bf0b05099123922e68f46e",
"assets/assets/icons/notofication.svg": "fcd26e2fa2daea65a3c6542926c00d32",
"assets/assets/icons/pin.svg": "60c82438615d6d510bd4f00b086491ca",
"assets/assets/icons/privcyS.svg": "04505ae3b37a73ba2e0352f25c99b48d",
"assets/assets/icons/Qr.svg": "feb9a5213418789c50e594b9bcbc9548",
"assets/assets/icons/qrcode.svg": "8cc6b9dcf3cb1e5e3a7d048cc4afab57",
"assets/assets/icons/reload.svg": "10d2cf23a96aa4eeedcbec186346c980",
"assets/assets/icons/scan.svg": "e64c87bc6fd7693911d1bc4af3852a52",
"assets/assets/icons/search.svg": "7e38cd10ebdbc29d24455e8c85148477",
"assets/assets/icons/settingH.svg": "5a296c1bad57bbb94e91bc64a77ef06e",
"assets/assets/icons/share.svg": "8c001436671193eda99316610bf7bca6",
"assets/assets/icons/termsS.svg": "0f05bcbaf24c9f588dc2d9521b7a82ea",
"assets/assets/icons/trans.svg": "9b4d7157677438402fe7882c6851d746",
"assets/assets/icons/transcationH.svg": "e9a23dd8b66597c858e374daaf99a7d2",
"assets/assets/icons/transferD.svg": "191a5fece790dcb620c3be736192487e",
"assets/assets/icons/transferT.svg": "e90d9753f6c8a7ccd78343d4d0246d80",
"assets/assets/icons/universe.svg": "9f98c73aaa4d465293f9bc2247e3c10c",
"assets/assets/icons/user.svg": "363bc05226bc4f55bee3d14e013e9e3f",
"assets/assets/icons/wallet.svg": "f74a8433d9c928ae725b3c4965c74bd2",
"assets/assets/icons/walletH.svg": "b53f884c414d2f475e57adad44b9ca7f",
"assets/assets/icons/walletS.svg": "b4205c10d5baa5a37cae9aba047dcb0e",
"assets/assets/images/Bg.png": "847cff945440329734b65c57f8c1ab5e",
"assets/assets/images/bgintro.png": "e1cd84a7574bd33f1241ac3499a27252",
"assets/assets/images/eye.png": "4e53501a56512fcaa4c6c8375cc9b9ed",
"assets/assets/images/eyeb.png": "f6690568ea11ec462be1ba24d6a61c17",
"assets/assets/images/finger3.png": "d2f6f469fa349eb52b3039b92358e0e6",
"assets/assets/images/HeadIntro1.png": "c82bac27298ede51428b95dc57933657",
"assets/assets/images/HeadIntro2.png": "48cef95c78e3546b5722269c1b5c1444",
"assets/assets/images/HeadIntro3.png": "67d0b8de3eecafeaaa557e2962749813",
"assets/assets/images/Illustration1.png": "3b87236f1dcabcd42879995ba2b68ac8",
"assets/assets/images/Illustration2.png": "b53e41877822f6afc79b381efad8a62c",
"assets/assets/images/Illustration3.png": "a3d205a7464a18d7e629097125144284",
"assets/assets/images/income.png": "f5db57af0295313197f183338577aba2",
"assets/assets/images/layers.png": "8e1915c1d45c3974df3d5e628c4690f5",
"assets/assets/images/logommd.png": "462957df670be0fcbda3c4c0d02b1d31",
"assets/assets/images/social-media.png": "6fd829ae20a46304b9d6f578cc6459df",
"assets/assets/images/trading.png": "d3e2eda30b053b21be7de1de684f6586",
"assets/assets/images/Vector.png": "d0d9a2c7f48d8d11ae5af6d9dce8f267",
"assets/assets/lottie/loading1.json": "24e6ed16995681d7d1108bba1801e70b",
"assets/assets/raw/raw_tokens_list.json": "a696d9fec9b6459b5e1b835c9bd04ef1",
"assets/FontManifest.json": "39c77aac43e177b2ff2ac6835248ee13",
"assets/fonts/MaterialIcons-Regular.otf": "f1ee809f53ff26539f46c606a7b0305f",
"assets/NOTICES": "7b10cce7a211b438f24a9eb9b9e502f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "3d55538528bd68cf6a3f26f15d7f7fd4",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "cab1bc09f4e21c83177f5e0fd971c195",
"icons/Icon-512.png": "f8097b8a5157043a9712c150d8ac4f1b",
"icons/Icon-maskable-192.png": "cab1bc09f4e21c83177f5e0fd971c195",
"icons/Icon-maskable-512.png": "f8097b8a5157043a9712c150d8ac4f1b",
"index.html": "e4b93cb0b18bff1cbaf098c0c82c752c",
"/": "e4b93cb0b18bff1cbaf098c0c82c752c",
"main.dart.js": "554d87b1acac52fd0369cd9aa5a4cacf",
"manifest.json": "cda08c8f26ce0c3dcba3e419e52dd80a",
"version.json": "2cb3465b45e069d977ca8ede3c5ca699"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
