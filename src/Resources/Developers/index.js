import React, { Fragment } from 'react';
import { SecondaryHeading, TertiaryHeading } from '@/shared/headings';
import { MoreInfo } from '@/shared/MoreInfo';
import { Section } from './styles';

export const Developers = () => (
	<Fragment>
		<SecondaryHeading level={2} isCenter={true}>
			Developers
		</SecondaryHeading>
		<p>
			Musicoin API is in its beta stage and access is only on invite by invite
			basis. If you&apos;re an app developer and would like to develop on top of
			musicoin, please send an email to app at musicoin.org along with a short
			description of your use case and we shall review your request.
		</p>
		<Section>
			<TertiaryHeading level={3} isPretty={true}>
				Endpoints
			</TertiaryHeading>
			<MoreInfo title="api.musicoin.org/artist/profile/0xa41f0291b4466c28f4430512492cd9a06fb76b2c">
				<pre>
					<code>
						{`
{
	"createdBy" : "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
	"forwardingAddress" : "0x0000000000000000000000000000000000000000",
	"descriptionUrl" : "ipfs://QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH",
	"artistName" : "VG",
	"owner" : "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
	"contractVersion" : "v0.3",
	"imageUrl" : "ipfs://QmR8mmsMn9TUdJiA6Ja3SYcQ4ckBdky1v5KGRimC7LkhGF",
	"followers" : "0",
	"socialUrl" : "ipfs://QmbJWAESqCsf4RFCqEY7jecCashj8usXiyDNfKtZCwwzGb",
	"tipTotal" : "0",
	"tipCount" : "0",
	"balance" : "4"
}
						`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="api.musicoin.org/license/detail/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f">
				<pre>
					<code>
						{`
{
	"resourceUrl" : "eipfs://QmceLjmdPeewxMX2RKN6vcPsWc7hSGbvs5HxqAbGoG4bdR",
	"contentType" : "audio/mp3",
	"createdBy" : "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
	"totalShares" : "1",
	"totalPending" : "0",
	"title" : "Chasing for ICO",
	"getContributorsLength" : "1",
	"licenseVersion" : "1",
	"metadataVersion" : "0",
	"artistProfileAddress" : "0xb1a1ca710934e70e56848328a1ee75e0754c2664",
	"artistName" : "isaac",
	"totalEarned" : "234000000000000000000",
	"owner" : "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
	"playCount" : "234",
	"contractVersion" : "v0.7",
	"imageUrl" : "ipfs://QmRDcdvjeXseuxcV7BPEoDt3bL4yxGZgK7VoDjJwgeAgvc",
	"weiPerPlay" : "1000000000000000000",
	"totalTipped" : "0",
	"metadataUrl" : "ipfs://QmbqN1PcYCwLHB3dEzAZ5wMm7B2DNwpjYHSjLCTxBncDmu",
	"tipCount" : "0",
	"balance" : "9",
	"contributors" : [
		"address" : "0xb1a1ca710934e70e56848328a1ee75e0754c2664", "shares" : "1"
	],
	"royalties" : [],
	"coinsPerPlay" : "1",
	"totalEarnedCoins" : "234",
	"address" : "0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f"
}
					`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="api.musicoin.org/license/ppp/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f">
				<pre>
					<code>
						{`
{
	"key" : "ABCDEFGHIJ==",
	"tx" : "0xabcdeabcdeabcde21443231b3a6d1daaabcdeabcdef252a29da8c78665af7cf4"
}
					`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="https://musicoin.org/json-api/artists/featured">
				<pre>
					<code>
						{`
[
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmQKaMVqSuh829owrsMMa6C9aFZRVdDBaVxvRt7cnZY6Xj",
  "artistName": "Fyah_B Music",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmW9hqSZqxT2ggnuYaZHnd87ziGGHRCDLPpS9AjSPb4yRM",
  "followers": "0",
  "socialUrl": "ipfs://QmQW3TGFRuthZELSQDQh4SN129GQpf74yrMB2dNeT3A1ok",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "250",
  "image": "/media/cf392dc7aae5cc7660ac29d3f70431e7e262f6042b100f9c6d3783faae8a2b9778717562c4881f481d597c3f8d66",
  "social": {
    "website": "https://soundcloud.com/fyah_b-music/tracks",
    "google": "https://plus.google.com/u/0/+AnthonyLalchand",
    "soundcloud": "https://soundcloud.com/fyah_b-music/tracks",
    "youtube": "https://www.youtube.com/channel/UCpiMVAAxi5PrkEs9DbdHZDA",
    "Medium": "https://soundcloud.com/fyah-b/tracks",
    "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEZAFekVfajhuODJiU2Y3R0FzTEZALT0RkbmEtMk1JVC13di13NWFsQXg3dTdOSElrenJYOTZATOEhvdUp6b2JyaTlINEJIeFVLVFFueVY5LVVfX1JUOTFURkZAVcGk1XzJLMmdWSEwtRkJWaDRqai1EaFEZD/",
    "twitter": "https://twitter.com/fyah_b"
  },
  "description": "ARRANGER/COMPOSER/SOUND ENGINEER/PRODUCER.",
  "profileAddress": "0xf286501f4732fd941e2015c7188deb73475712c3",
  "timeSince": "4 hours ago",
  "genres": [
    "Reggae",
    "Remixes",
    "Roots",
    "Beats & Instrumentals",
    "Dance & EDM",
    "Dancehall",
    "Trap",
    "Hip-hop & Rap",
    "Fusion"
  ],
  "directTipCount": 0,
  "followerCount": 2,
  "id": "5ae9c52abc8c2b17044fd0c0"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH",
  "artistName": "Camille Chardon",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmR8mmsMn9TUdJiA6Ja3SYcQ4ckBdky1v5KGRimC7LkhGF",
  "followers": "0",
  "socialUrl": "ipfs://QmbJWAESqCsf4RFCqEY7jecCashj8usXiyDNfKtZCwwzGb",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "0",
  "image": "/media/cf3928c6aff9ec617fed29b4f42936d38d49cd7f162d54fa233dafff82b311e242144e76afa018587a77232e986d",
  "social": {
    "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEhjN2tvaDdnaVlBMUlucFo4UGFxWGNIMW5aY1NjS2d4dDNvOGc5UkdCU3BOLUdGblBhbS1UaTNCNEdfaENIeHFwLV82WElSOHI2TGFzMmx3YWZArekhXR21MbGg5SWNwNE0xdkUzMjln/"
  },
  "description": "",
  "profileAddress": "0xdf8b38c7529283de24170d744f0b16073d503e2b",
  "timeSince": "4 hours ago",
  "genres": [],
  "directTipCount": 0,
  "followerCount": 1,
  "id": "5ae9bc4fd2df760216ebb73a"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmQhzASVN1xpXeMyi3SVd9GEe6wxrPjZcNe9yvBp3xT8ab",
  "artistName": "0kult",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmeEeQzCoHVHwHo3uFmGQ9wAmxiw3ruZkdXb9VGuDZMpdf",
  "followers": "0",
  "socialUrl": "ipfs://QmXouyt2RYgSwdjcBKqjHbSJR6SUTWpZ6H182TrY8mGL35",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "0",
  "image": "/media/cf391fbba7c5e56f7e9c2ba9e72b30a1ce45c10b144d40ea7a26adcad5aa1d895f455d53c49f326e09610536bb4d",
  "social": {
    "bandcamp": "https://0kult.bandcamp.com/releases",
    "soundcloud": "https://soundcloud.com/0kult",
    "youtube": "https://www.youtube.com/channel/UCfY9hCGTSExHCys5WB24acA/featured",
    "Instagram": "https://www.instagram.com/charlesdef06/",
    "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEdub3BmQ3hCR0xiUVNyRlk1ZA3VFT016QzQwS2tZAeFJjZAm9WTTgzLWJwLTVha0pjWVpxZAk5pOS1Ha05PSmlRSndxaXZAMRzZAOTmY1SEVKWTVxQ1cxNmJ3YlE2SHFTZADRYRDE2SmhKM1RvVQZDZD/"
  },
  "description": "I'm a 31 years old french producer who loves a lot of music styles from the mainstream pop to the death metal.\r\n\r\nHope you'll enjoy my tracks.",
  "profileAddress": "0xfbd6304d4e16a473c692f27a05a889a0a71b9f77",
  "timeSince": "6 hours ago",
  "genres": [
    "Chill",
    "Ambient",
    "Electronic",
    "Drum & Bass",
    "Emo",
    "Metal"
  ],
  "directTipCount": 0,
  "followerCount": 1,
  "id": "5ae9a371137401627a287634"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmPaD2NeyrBP7VqDJJxFwhJugX3ywLusbX6kzxXiEXDbdw",
  "artistName": "PISH",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmPBPv3tb2oXjguSixnsfrYKj6QdQRB8dd7C9bWNR5cmeP",
  "followers": "0",
  "socialUrl": "ipfs://Qmd5No4Xi7fXcGPuxfjqqocGFyRjwWEypo6fVGGKu1JnQU",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "1",
  "image": "/media/cf392abc92e2ac5873e612b9fa042ac1d27bc23f23066ee07d6895d9b78a2aeb50453272c4ab22551f0e2b2bba7b",
  "social": {
    "website": "https://www.facebook.com/pishoriginal/",
    "soundcloud": "https://soundcloud.com/originalpish",
    "youtube": "https://www.youtube.com/user/paulvindenes",
    "Instagram": "@originalpish",
    "twitter": "https://twitter.com/bigpKAKK"
  },
  "description": "Im PISH!",
  "profileAddress": "0x3dee25c182abdc881913b0513c41465a48df14d9",
  "timeSince": "8 hours ago",
  "genres": [
    "Pop Rock Indie"
  ],
  "directTipCount": 0,
  "followerCount": 2,
  "verified": true,
  "id": "5ae9852b779f163a0a853778"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmW8uJeGJLSqAhVQA29JtDvaP7wCdenm8SEkgfHiV3iZ5P",
  "artistName": "KAKKMADDAFAKKA",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmRDf4WDPQnwVvJqh85cyJhAEyb2HtqhqNBzDbzEBJGsir",
  "followers": "0",
  "socialUrl": "ipfs://QmTBodxyXcg52XwP5y3t9EUt2134Vr8EJxDWwPUJjPXCrF",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "2",
  "image": "/media/cf3928baa4a0c86841851396c61515e3d33b992f3c3e5fea5227a68faeac19bb456f474bb9ab0f5e0f710f35b659",
  "social": {
    "website": "https://nb-no.facebook.com/kakkmaddafakkaofficial/",
    "Instagram": "https://www.instagram.com/kakkmaddafakkaofficial/?hl=nb",
    "twitter": "https://twitter.com/kakkmaddafakka"
  },
  "description": "INDIE MUSIC FROM BERGEN NORWAY",
  "profileAddress": "0xe8a9aa9091f55575065c221b64726d8f16609886",
  "timeSince": "9 hours ago",
  "genres": [
    "Indie",
    "POP"
  ],
  "directTipCount": 0,
  "followerCount": 2,
  "verified": true,
  "id": "5ae97bcd02b9de25ae436dbd"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmURbFcjfDjiAZCQLpCseSmh182xozTV7pEgB5SJyVxgdT",
  "artistName": "POOF TROOP ENTERTAINMENT",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmUAWCBfG3d3zSPpzYEvB5Kn77QDuN236fzm5NNpjeM2Jo",
  "followers": "0",
  "socialUrl": "ipfs://QmaWBGmxffn6qbfXT1HHLqKhnmtd1Uvv5Dp1iKcBPSbPxq",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "250",
  "image": "/media/cf392fbf95d7dd4a56e719d2ea300fe2c15ae93a07417cc5206995f993965ae002477f5cc8873b6b275e05749544",
  "social": {
    "website": "Www.facebook.com/outfaaction",
    "youtube": "Www.youtube.com/pooftroopentertainment",
    "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEZA4aldDSTZAsUHc5cEt2UzZAtY3NaMVhCSUFaZAlMySm45eHhQUFN6ck1GY0RkbmdzcG5vRFU2S3JYT3FPd19zdGQyUkJsckNDNVVXYlpGcjFEVThzOUpvRVF2TXRqdHJkVThZAT0ZA4ZA3BzZAnRuSHRHNWcZD/"
  },
  "description": "Producer and Graphic Designer",
  "profileAddress": "0x1f45eaf8516bb2aa0b9db57310888d60f07e4062",
  "timeSince": "10 hours ago",
  "genres": [
    "Hip-hop & Rap",
    "rnb",
    "Beats & Instrumentals"
  ],
  "directTipCount": 0,
  "followerCount": 1,
  "verified": true,
  "id": "5ae966a6675e6f05dfaf1b16"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmYyVMYkmRJMD2KVozd5yAQDf4MLv3y8smKKQ1Nifrovkw",
  "artistName": "STAYLEAVE",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmZCGS1ZpgHK5DS3sA63P3xFWQLL9YfKa8UMkbQ2vqahXP",
  "followers": "0",
  "socialUrl": "ipfs://QmPWcLWorkQM9B7kuVwViAZCmN6fvkL8Luy7Aw3oQxSuYi",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "7",
  "image": "/media/cf3920bd85c7ae7661b335aaa5270ca1c8429a7f15474fed400f88f1df810e985519507c96ab24293b4a292e877b",
  "social": {
    "soundcloud": "https://soundcloud.com/stayleave",
    "youtube": "https://www.youtube.com/channel/UCNwq-qFcXl_sDPBZJJkZVUQ",
    "Instagram": "www.instagram.com/stayleave",
    "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEhJWER1aWoxRkUtRmtoOFdSYXVQMjZA2V2E5TURxR1Fwc1pYQUlxU0tDMnFXYUFVZADB6TTJQUWJDTndLOXZAOY2owWHVfdVZAUOS12a2NhRDRTbEt5QWpsWEI2QmRjYXpJYmFXVzhhS3dEMAZDZD/",
    "twitter": "https://twitter.com/STAYLEAVEmusic"
  },
  "description": "Music Maker from the magic land of Nicaragua.",
  "profileAddress": "0x868fc08c080cf7905c347528f34c2ddfd005105b",
  "timeSince": "21 hours ago",
  "genres": [
    "Dance & EDM",
    "Electronic",
    "Pop",
    "House",
    "Drum & Bass",
    "Downtempo",
    "World",
    "Latin"
  ],
  "directTipCount": 1,
  "followerCount": 3,
  "verified": true,
  "id": "5ae8d26729a8972dbaf79d70"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmUNZBrkv72rVRTivtpqrDPCjwM62dtrjiB3Hm9V3KEPvb",
  "artistName": "Kara Square",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmWKEENX5dFvegkK5TXS3LaQHp8AqKQQ3RuxwgeEThScQk",
  "followers": "0",
  "socialUrl": "ipfs://QmUHY6UbtZKVwRhq4he62oQKk3GLtkUYimHee6voRvfjnK",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "7",
  "image": "/media/cf392db587d1d17424b03b97f50434d98e57f41f763856fa5f2efcfc97933982077370498aae105e19531b258e40",
  "social": {
    "website": "http://www.karasquare.com/",
    "bandcamp": "https://karasquare.bandcamp.com/",
    "soundcloud": "https://soundcloud.com/karasquare",
    "youtube": "https://www.youtube.com/MindMapThat",
    "facebook": "https://www.facebook.com/app_scoped_user_id/10216249012129057/",
    "twitter": "https://twitter.com/KaraSquareMusic"
  },
  "description": "Kara Square is the founder of Thinkroot Records and a ukulele slinging, songwriting, and singing music maker.\r\n\r\nKara released her solo folk pop album, Love Songs for Everyone but Especially Uke, in March of 2013. She released an instrumental album called Ukulele Duels in 2015. She is constantly releasing new music for Thinkroot Records music catalog and actively creates custom music for clients.\r\n\r\nKara Square loves collaborations. She has a Tex-Mex guitar and ukulele surfer pop rock album with Piero Peluche (Italian multi-instrumentalist musician, composer, and producer) called Square Meter. She produced music with Rich Ratvasky as Team Smile and Nod (Look Both Ways Before You Die [2008], Mourning Time [2011], Dust from the Stars [single]). Kara is an active member of the international Creative Commons remix website ccMixter.org.\r\n\r\nIn 2010, Kara Square began her solo career by recording comedic songs that didn’t fit the style of Team Smile and Nod. She made videos to accompany them and blogged about it as Mind Map That. Her video, “Think About Poop,” won Water For People’s Support a Movement Video Competition in December of 2010.\r\n\r\nAs Kara recorded her comedy songs, she posted each track’s stems on ccMixter.org. Since joining ccMixter in June of 2010, her songs have been remixed over 930 times by a talented community of musicians. Based on her enthusiastic participation and her choice to embrace Creative Commons, she was invited to be an Admin on ccMixter in August of 2011.\r\n\r\nKara Square’s vocals and music can be heard on many albums and compilations, including:\r\n\r\n    Free! Music! Sampler – Freeloaded [2010]\r\n    ccMixter – Emergence [2011]\r\n    Lawrence Lessig & ccMixter – Strike the Root [2011]\r\n    Free! Music! Sample – FreeMixter [2011]\r\n    ccMixter & Jamendo – The Best Time of the Year: Side B [2012]\r\n    Free! Music! Sampler – Freedom & Beer [2012]\r\n    Free! Music! Sampler – Viva la FreevoluCCión\r\n    ccMixter – Season of Gratitude [2013]\r\n    Free! Music! Sampler – We Love Sharing [2014]\r\n    ccMixter – Winter Nights [2017]\r\n    Tobias Weber & Bill Ray – Codex Tempore [2018]\r\n    ccMixter – Sing Along with Blue Wave Theory [2018]\r\n\r\nKara Square’s vocals are also featured on acclaimed Turkish musician, Murat Ses’ album Light Cone [2012] (track 2, “Chiral of Past”). In 2015, she was featured in track by Murat Ses called “Endless Dance.” It won Akademia and Global Music Awards (both in the USA) for Best Dance/Electronica Song and charted on Billboard Magazine in 2016.",
  "profileAddress": "0xe58b79981b63c1ea385ff30187f59b1f57277a4e",
  "timeSince": "1 day ago",
  "genres": [
    "Singer-Songwriter",
    "Folk",
    "Rock",
    "Pop",
    "Electronica",
    "Fusions",
    "Chiptune/8-Bit"
  ],
  "directTipCount": 1,
  "followerCount": 5,
  "verified": true,
  "id": "5ae8745222399d27b1690d03"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://Qmbq28Rn4szJeuF4uHqJLsf3BnhQ7pKuPmtTiMFi7pqWsc",
  "artistName": "Aleksander Olav",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmQSNyrAvyWi6Lq19e72vYJPHYt4i8HoeW2qj6JP4ENCoh",
  "followers": "0",
  "socialUrl": "ipfs://QmVzNm5j4SmEWuHqqg16TidP6sWet83JAoq799LnrWSJzf",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "2",
  "image": "/media/cf392bad8ceded6d67ad2a88a62f2ea382669b7e332d7dfb5f07b0898fe020bc5176374097ff3f4b797e0605b043",
  "social": {
    "website": "https://aleksanderolav.com.",
    "soundcloud": "https://soundcloud.com/aleksander-olav",
    "youtube": "https://www.youtube.com/channel/UCCwGh-qeEpSHAaO7TpQ_Ezw",
    "Instagram": "https://instagram.com/aleksander_olav",
    "facebook": "https://www.facebook.com/app_scoped_user_id/10160447908110714/",
    "twitter": "https://twitter.com/AleksanderOlav_"
  },
  "description": "I make music of all sorts",
  "profileAddress": "0x5ccd9f6f414a25e47bc3c94319a16ff2de21e942",
  "timeSince": "2 days ago",
  "genres": [
    "Electronic",
    "Dance & EDM",
    "Pop",
    "Remixes"
  ],
  "directTipCount": 0,
  "followerCount": 6,
  "verified": true,
  "id": "5ae7c6925529d827a625d7bf"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmUfVviy61MJEK3bzWgaj4CJMXtCwi8yZ8VNvBDZj6aJ9Y",
  "artistName": "Cael Willis",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://Qmajd2eU71Ay6Rqyqt8cKH3it9UoZEXh9RssavpnG1U4Le",
  "followers": "0",
  "socialUrl": "ipfs://QmbJWAESqCsf4RFCqEY7jecCashj8usXiyDNfKtZCwwzGb",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "3",
  "image": "/media/cf391b94a6a6fa7926e53c98a6312eebca77942f0e3c04c2636791d2bc9d30bb0d7376429cbf05750a0a1d72934e",
  "social": {
    "twitter": "https://twitter.com/Cael_the_Willis"
  },
  "description": "I am Cael",
  "profileAddress": "0x1a0626025efc96d7a812b6df98d8a45158f3ce3b",
  "timeSince": "2 days ago",
  "genres": [
    "Pop"
  ],
  "directTipCount": 0,
  "followerCount": 3,
  "id": "5ae7bd02b86b671d7221ee23"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmctC2CBtV4v9nRUYymYHygmxyn1b2gU9PQYqR1Pae3S11",
  "artistName": "Sergy el Som",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmS7byNdeq6gEUHjkpncd4QfGnCBghtWoFeakSTe3ubBFj",
  "followers": "0",
  "socialUrl": "ipfs://QmYhLaprt6MmaYBFYWi98ybBGWsizTrgfxCc3rmUbv5oox",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "117",
  "image": "/media/cf3929c9a0edd14874a54b86d53617f8d073c22f214066cd503087ff81b01c845b676050969a217e7e4e2a049941",
  "social": {
    "google": "linguagemmusical10@gmail.com",
    "soundcloud": "https://soundcloud.com/sergyelsom",
    "youtube": "https://www.youtube.com/channel/UCgMRIXxwcfv2Kb3VE5rIulA",
    "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEg3VGVpTTgtTDctODNiWlNoMDVwNXZA3WDd4UWhZAWWZA0dUNKUUJ6ZAElkLXo5NjhHQzNwSzgxNVBnS2NFVWpoeEFpSkhSQUFDUUVnUUhiRG0xYTRZAempOalc5cUlpYmc3QlljUmV1aTEzRk11WTl3VHcZD/",
    "twitter": "https://twitter.com/SergyelSom"
  },
  "description": "Sergy el Som is a brazilian music, composer and producer. ",
  "profileAddress": "0x98e38af7f0cba104855e6fbf56527b3ae0b51712",
  "timeSince": "2 days ago",
  "genres": [
    "Instrumental",
    "celtic",
    "christian music"
  ],
  "directTipCount": 0,
  "followerCount": 4,
  "verified": true,
  "id": "5ae79b2216f17a67e1c4ec28"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH",
  "artistName": "Datboi Burt",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmSWYnBBwGAe3R4NKAbg4cxZsH6sAJTCqk1PXutNBnXfcu",
  "followers": "0",
  "socialUrl": "ipfs://QmTkvwBKzTfg17QE9nHA7CMxs5kRBrY2hta5P4PvPFoXQv",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "253",
  "image": "/media/cf3929a99bfadd6e66933c84a3316bdcf042ce2b71174ff16416f2cea7923c90454a3461a5bc01550f551020bc5e",
  "social": {
    "soundcloud": "Datboi burt",
    "linkedin": "Datboi burt",
    "youtube": "Datboi burt",
    "Reverbnation": "burtdapapergetta",
    "Instagram": "Da_paper_getta",
    "facebook": "https://www.facebook.com/app_scoped_user_id/782231545282892/"
  },
  "description": "",
  "profileAddress": "0xa8ad04ea792ef3d407dec410ad03ba0e6705b967",
  "timeSince": "2 days ago",
  "genres": [
    "Hip-hop & Rap"
  ],
  "directTipCount": 0,
  "followerCount": 3,
  "id": "5ae78e29d74c2b5373dabbbd"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmfZD97P59nHDGhLN5spwJ6HGFUGnLAYJrXBXL9WvCVWsb",
  "artistName": "crazzycatz",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmehVrZRKi2JZjXx4CrDTJ5QzJNAxr3vFHhng3KbjRibPS",
  "followers": "0",
  "socialUrl": "ipfs://QmWFebms5ce3k1UWFoiGPg7LfDxiXRNw96fpteTP1jNx9t",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "258",
  "image": "/media/cf391f9694e6c57e5abd4fabca0907ea8f40de08113e02fa6d148afc9eaa5ba572696d5f9afa3e79276921248f78",
  "social": {
    "soundcloud": "https://soundcloud.com/crazzycatz",
    "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEVrY05Ebm8tQnkwb1M5YTRTb1FJNkJMWFRWUlJtbVp1WmN6NlZASb19KU1FaR3JOenRmQjB2YnRjVGtoOXdOV3hYcS15UFdSS3NnQlR3TjJFTS1hb1BraTlCY0twYUFIb1BhUHhaamtiYUJfRGZAYcVEZD/"
  },
  "description": "am a producer who experiment alot with sounds i started a year ago  follow me as i involve myself ",
  "profileAddress": "0x5512bfb0d5e79637f7d1498e6a5fde124da6a06c",
  "timeSince": "2 days ago",
  "genres": [
    "electronic .experimental. chill"
  ],
  "directTipCount": 1,
  "followerCount": 7,
  "id": "5ae763a4e874bc15d9da47b9"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmUMiVaear9ZSJeEsgLAwwkGBkF4sW5QydqnM7EJkr2fHf",
  "artistName": "LITESKIN",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmaeRuijzzV9D7XqpGPzLHN6Zgco9jnxxmg5Ang7K52QTb",
  "followers": "0",
  "socialUrl": "ipfs://QmTdHMSG8VYmkKyF4dodL3sCRsuLpEYbvAj3piANTkij72",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "250",
  "image": "/media/cf391b9b90e1f6466bae2bd8d45407e3cb44fc36093c799d4d39a7d2dfb206ab4c4c6204bca7122c060e7a178b49",
  "social": {
    "website": "https://twitter.com/LITESKIN321",
    "soundcloud": "https://soundcloud.com/user-937328534",
    "youtube": "https://www.youtube.com/channel/UCLqfx4y9nqLiMO3obfa88dw",
    "Instagram": "https://www.instagram.com/realliteskin123/?hl=en",
    "Medium": "https://www.facebook.com/george.escalante.77",
    "facebook": "https://www.facebook.com/app_scoped_user_id/2034511216578651/",
    "twitter": "https://twitter.com/LITESKIN321"
  },
  "description": "LITESKIN (Living It Through Every Situation Known In Nature) is an artist known for his incredible word play and meaningful thought provoking music.  Self described as the, \"WordSmith With A Purpose\", there is no topic that he will shy away from.  Straight from New York City's concrete jungles and part of the collective known as, \"SOUNDMINDS\", this is an artist who will keep you salivating due to context and his wizardry with words.  Pay attention and keep your ears prepared for HipHop and SpokenWord's acolyte.   ",
  "profileAddress": "0x7f9ab296cf0359cf9a3e89c0c3bb357867887600",
  "timeSince": "2 days ago",
  "genres": [
    "HipHop/SpokenWord"
  ],
  "directTipCount": 0,
  "followerCount": 1,
  "id": "5ae72b260190e841db1e56cd"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmTe3Ngvnkui3mgm6rM3n4Hz9WeNvFdxL5WWp7NnA7dSvq",
  "artistName": "Franc Castillejos",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmSSEYTGPEqekwfrSJNjZ8jnvNUaePnTbAt9eTvEuJ4j5K",
  "followers": "0",
  "socialUrl": "ipfs://QmTxv73gNxmmTLkmtzZzs9xvVKFzNrvhbcfesdWDysb5ug",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "253",
  "image": "/media/cf3929ad87cdcb6b41910c84fb1439e0e849e2261f4c5dc5611091dc8388068756607108989d035e38717c2cea60",
  "social": {
    "soundcloud": "https://m.soundcloud.com/franc-castillejos",
    "facebook": "https://www.facebook.com/app_scoped_user_id/10100406935920118/"
  },
  "description": "Hi, I’m from Guatemala, and I write and record tunes any chance I get. ",
  "profileAddress": "0x0d18e0963b9da6ff963b3073660f3e6052e983a9",
  "timeSince": "2 days ago",
  "genres": [
    "Folk",
    "Pop",
    "Rock",
    "Indie"
  ],
  "directTipCount": 0,
  "followerCount": 1,
  "verified": true,
  "id": "5ae723e2ced59737bbad3e64"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmafPHMjaRqsacrQYVSnVriwNqtxHDtDcJjMSbfE9uokc3",
  "artistName": "Justin Demix",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmbNGviTFjz8ckxy5QYVWdAQnEqBmQWJn1cqHXUyBbCSS4",
  "followers": "0",
  "socialUrl": "ipfs://QmSjaPpsJmRWJHUfsdVsX4HSpPfDRt8kKTpKK5wNyProG1",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "255",
  "image": "/media/cf3918b085e2f67857be07d9f30827eb8e52f51a121076fa791bb5ff8b893f995a106640b59120620f590b158c1f",
  "social": {
    "website": "https://offjustindemix.wixsite.com/justindemix",
    "soundcloud": "soundcloud.com/justindemix",
    "youtube": "https://www.youtube.com/channel/UCW1ZntuOMWMwQffIz_xRYzg",
    "Instagram": "https://www.instagram.com/justin_demix/",
    "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEZAlNGI4Sy1NLXR0Nmx1Ql9TWmM2ZAGw5YzR0S2xyUkhFWldOdFJRa0s2cm84cTFnTmNSb1Radml5WlJ3czVNeGJYV295UXZAjZA1A2eFBCeEVsc3FiQTYtT1NWTWdIWWNDU041YVlRN29yXzNVOUNzWncZD/",
    "twitter": "https://twitter.com/justin_demix"
  },
  "description": "Au début des années 90, à l'arrivée d'un nouveau courant musical à l'époque nommé \"New Beat\" suivi de très près par sa grand﻿e sœur \"Techno\", ses goûts musicaux se marqueront définitivement, notamment pour la House Music et la Soulfull. \r\nA son actif, 6 ans de radio Fm de 93 à 99, et diverses expériences de djing tel qu'une soirée au Soho (Bruxelles) pour le site Ready2Move en 2008, une autre au Notger (Liège) en 2013 en compagnie de Dj Jidee et quelques diverses apparitions.\r\nEn 99, il décide de se lancer dans la production, fait une longue pause et sort enfin son 1er Album \"Escape to Paradise\" en 2008 (dont trois titres ressortiront sous forme d'E.P en 2013 grâce au label Français Expended Records), ensuite suivra \"The New Beginning\" en 2009 et un single \"The revenge\" en 2010. On notera également la réalisation de deux ou trois remixes notamment pour Gentle Fred et Miss Leeloo et deux participations à des concours dont une pour le label Defected Records et une autre en 2014 pour la \"R.T.B.F. Dj Experience ou il termine à une honorable 7ème place.\r\nEn février 2012, il devient Dj Résident sur BEATWINUS Radio (Paris) (webradio spécialisée House & Soulfull ) où il côtoie alors les plus grands: Joe Negro, Dj Meme, Dj Spen, Frankie Knuckles, Grant Nelson, Quentin Harris, Jamie Lewis, Groove Assassin, Shazz, Jon Cutler, et bien d'autres encore issus de la scène house internationale. \r\nSuivra ensuite une résidence à Buenos Aires et Barcelone pour d'autres webradios.\r\nSeptembre 2015, il est de retour comme Guest Dj notamment sur Soulside Radio (Paris)....\r\n\r\nAt the beginning of the 90s, with the arrival of a new musical current at the time named \"New Beat\" followed closely by his big sister \"Techno\", his musical tastes will definitely mark, especially for House Music and the Soulfull.\r\nHe has worked for 6 years of Radio Fm from 93 to 99, and various djing experiences such as an evening at the Soho (Brussels) for the Ready2Move site in 2008, another at the Notger (Liège) in 2013 with Dj Jidee And some various apparitions.\r\nIn 1999, he decided to start production, took a long break and finally released his 1st album \"Escape to Paradise\" in 2008 (three titles will be released in the form of EP in 2013 thanks to the French label Expended Records), then Followed by \"The New Beginning\" in 2009 and a single \"The revenge\" in 2010. We also note two or three remixes, notably for Gentle Fred and Miss Leeloo and two contests, one for the Defected Records label and one Another in 2014 for the \"RTBF Dj Experience\" where he finished at an honorable 7th place.\r\nIn February 2012, he became a resident DJ on BEATWINUS Radio (Paris) (house & soulfull webradio) where he met the biggest: Joe Negro, Dj Meme, Dj Spen, Frankie Knuckles, Grant Nelson, Quentin Harris, Jamie Lewis, Groove Assassin, Shazz, Jon Cutler, and many others from the international house scene.\r\nThen followed a residence in Buenos Aires and Barcelona for other webradios.\r\nSeptember 2015, he is back as Guest Dj especially on Soulside Radio (Paris) ....",
  "profileAddress": "0x29ef91d5bf15388c34ab4a3a4d00b28fe03be353",
  "timeSince": "2 days ago",
  "genres": [
    "Easy Listening"
  ],
  "directTipCount": 3,
  "followerCount": 4,
  "verified": true,
  "id": "5ae7134785d00f19d0c0598c"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH",
  "artistName": "Peterjack",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmPUuEaBvDVSRK3pELUTxAkLGT8sSpvfhjnPcUCiH6aZZy",
  "followers": "0",
  "socialUrl": "ipfs://QmfG3TuVw6Lfj9wgdCJZq8QApGis4nuZciMet96GBGjeDo",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "8.99",
  "image": "/media/cf392aabb7d1fe6e67902bb2c2286ce2fe4ff9183d355ce7500afcceb5a81eb55c4b6b619e9c3672050d291c8552",
  "social": {
    "website": "https://www.facebook.com/PeterjackOfficial",
    "twitter": "https://twitter.com/DJpeter1T"
  },
  "description": "",
  "profileAddress": "0x2c3c404a7532dcab1bfadd52e628eaf0fad50e83",
  "timeSince": "2 days ago",
  "genres": [
    "Dance & EDM"
  ],
  "directTipCount": 0,
  "followerCount": 1,
  "id": "5ae6f4026ecd0b6f2cd02ffa"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmZQzYXzJncmFL3fRCpykoFYcBbXxaixuzu4aBp82zhXjw",
  "artistName": "Beat Maker",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmPSECRBSz5BMD4Tb7cqrkybHEU6NaN3WgFSRVqwqVTCBD",
  "followers": "0",
  "socialUrl": "ipfs://QmeV2fbc4QXr3sqVx4cKmDcs5a1LhwmhLYMKt842Y8wFGd",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "9",
  "image": "/media/cf392aad87d7cd6e42ae48a3dd276bc6d934cf3d371f4ec95f1b918ba8b926e063464362af9f046c3c6d1c059d6f",
  "social": {
    "Instagram": "@rbthebeatman",
    "facebook": "https://www.facebook.com/app_scoped_user_id/165413534295630/"
  },
  "description": "Producer/Engineer\r\n\"Always Working\"",
  "profileAddress": "0xd2c9ea2378058d2bd9da286674c012c3372352c4",
  "timeSince": "2 days ago",
  "genres": [
    "Hip Hop/R&B"
  ],
  "directTipCount": 6,
  "followerCount": 2,
  "id": "5ae6e3ccf594795a878b601f"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmYptnPKKZ74Xumh4ZyjVJ8Qvn8x371fsYNhCL5FLUEgYd",
  "artistName": "Stagma",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmNYWhxBQNv8RWtQuLKcQ2Uot6LxUeurC92Gwb8hjonF6s",
  "followers": "0",
  "socialUrl": "ipfs://QmWCy32U7aCYYSFygZ4WVSCqpbZSrzpkBSvBvR8GvqHRD5",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "5",
  "image": "/media/cf3934a795fce76e409a0bd9c2342bc3ce4fe72f144662c4636888c5b3bd1da1771837768aab4d7327542600e958",
  "social": {
    "website": "http://www.stagmaband.com",
    "bandcamp": "https://stagma.bandcamp.com/album/stagma",
    "youtube": "https://www.youtube.com/channel/UCsFshomW44DRZkutPxB5h9A",
    "facebook": "https://www.facebook.com/app_scoped_user_id/10215813481032674/"
  },
  "description": "Stagma is an international heavy rock collaboration formed by composer/guitarist Alexandre Santos (Scar For Life), and features Rob Mancini (Scar For Life, Boneyard Dog) on vocals, Vinny Appice (Black Sabbath, Dio) and Patrick Johansson (Yngwie Malmsteen) on drums, Neil Fraser (TEN) on lead guitars and Joe Petro on bass.\r\nOur debut single, Pokerface, was released in October 2017 and is available for download on all good streaming services. Our debut album is due for release in the new year and includes a bonus track featuring drummer Simon Wright (AC/DC) and an electronic introduction from gaming music legend, Jeroen Tel.",
  "profileAddress": "0xa93b947d5f758350909828df1114e07e1438aeaf",
  "timeSince": "2 days ago",
  "genres": [
    "rock",
    "alt",
    "metal"
  ],
  "directTipCount": 1,
  "followerCount": 2,
  "verified": true,
  "id": "5ae6e1ce7dbdaf4eb4f246d8"
},
{
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "forwardingAddress": "0x0000000000000000000000000000000000000000",
  "descriptionUrl": "ipfs://QmUHtEcYRQ9UQqy3sqXbLsnycJwwrbXavCCa3ANHUGoH6s",
  "artistName": "KennyCleod",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "contractVersion": "v0.3",
  "imageUrl": "ipfs://QmUFqVBZYJw9MQ56eiaKRQiB14AJVZzMvmw71Cia5UpCrr",
  "followers": "0",
  "socialUrl": "ipfs://QmZbAe2P5K8WpjLHQo8yJ7zLNgJfatQam2RR2XSFQFYwUi",
  "tipTotal": "0",
  "tipCount": "0",
  "balance": "2",
  "image": "/media/cf392fb8b3c2dd76489e0ad8dd326aa4de6acd0717255ee9266a85f7b082129e424c7206cc8a1c7a786e3805ad59",
  "social": {
    "website": "https://www.facebook.com/KennyCleod",
    "soundcloud": "https://soundcloud.com/kennycleod",
    "youtube": "https://www.youtube.com/user/KennyCleod",
    "twitter": "https://twitter.com/KennyCleod"
  },
  "description": "I'm a song writer and music producer!",
  "profileAddress": "0x1f700d77e931fbb165683b6873f33f0425cd68fb",
  "timeSince": "2 days ago",
  "genres": [
    "Hip-hop & Rap"
  ],
  "directTipCount": 0,
  "followerCount": 1,
  "id": "5ae6cbc88973c330f52f3013"
}
]
					`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="https://musicoin.org/json-api/artists/new">
				<pre>
					<code>
						{`
[
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmQKaMVqSuh829owrsMMa6C9aFZRVdDBaVxvRt7cnZY6Xj",
    "artistName": "Fyah_B Music",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmW9hqSZqxT2ggnuYaZHnd87ziGGHRCDLPpS9AjSPb4yRM",
    "followers": "0",
    "socialUrl": "ipfs://QmQW3TGFRuthZELSQDQh4SN129GQpf74yrMB2dNeT3A1ok",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "250",
    "image": "/media/cf392dc7aae5cc7660ac29d3f70431e7e262f6042b100f9c6d3783faae8a2b9778717562c4881f481d597c3f8d66",
    "social": {
      "website": "https://soundcloud.com/fyah_b-music/tracks",
      "google": "https://plus.google.com/u/0/+AnthonyLalchand",
      "soundcloud": "https://soundcloud.com/fyah_b-music/tracks",
      "youtube": "https://www.youtube.com/channel/UCpiMVAAxi5PrkEs9DbdHZDA",
      "Medium": "https://soundcloud.com/fyah-b/tracks",
      "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEZAFekVfajhuODJiU2Y3R0FzTEZALT0RkbmEtMk1JVC13di13NWFsQXg3dTdOSElrenJYOTZATOEhvdUp6b2JyaTlINEJIeFVLVFFueVY5LVVfX1JUOTFURkZAVcGk1XzJLMmdWSEwtRkJWaDRqai1EaFEZD/",
      "twitter": "https://twitter.com/fyah_b"
    },
    "description": "ARRANGER/COMPOSER/SOUND ENGINEER/PRODUCER.",
    "profileAddress": "0xf286501f4732fd941e2015c7188deb73475712c3",
    "timeSince": "4 hours ago",
    "genres": [
      "Reggae",
      "Remixes",
      "Roots",
      "Beats & Instrumentals",
      "Dance & EDM",
      "Dancehall",
      "Trap",
      "Hip-hop & Rap",
      "Fusion"
    ],
    "directTipCount": 0,
    "followerCount": 2,
    "id": "5ae9c52abc8c2b17044fd0c0"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH",
    "artistName": "Camille Chardon",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmR8mmsMn9TUdJiA6Ja3SYcQ4ckBdky1v5KGRimC7LkhGF",
    "followers": "0",
    "socialUrl": "ipfs://QmbJWAESqCsf4RFCqEY7jecCashj8usXiyDNfKtZCwwzGb",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "0",
    "image": "/media/cf3928c6aff9ec617fed29b4f42936d38d49cd7f162d54fa233dafff82b311e242144e76afa018587a77232e986d",
    "social": {
      "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEhjN2tvaDdnaVlBMUlucFo4UGFxWGNIMW5aY1NjS2d4dDNvOGc5UkdCU3BOLUdGblBhbS1UaTNCNEdfaENIeHFwLV82WElSOHI2TGFzMmx3YWZArekhXR21MbGg5SWNwNE0xdkUzMjln/"
    },
    "description": "",
    "profileAddress": "0xdf8b38c7529283de24170d744f0b16073d503e2b",
    "timeSince": "4 hours ago",
    "genres": [],
    "directTipCount": 0,
    "followerCount": 1,
    "id": "5ae9bc4fd2df760216ebb73a"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmQhzASVN1xpXeMyi3SVd9GEe6wxrPjZcNe9yvBp3xT8ab",
    "artistName": "0kult",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmeEeQzCoHVHwHo3uFmGQ9wAmxiw3ruZkdXb9VGuDZMpdf",
    "followers": "0",
    "socialUrl": "ipfs://QmXouyt2RYgSwdjcBKqjHbSJR6SUTWpZ6H182TrY8mGL35",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "0",
    "image": "/media/cf391fbba7c5e56f7e9c2ba9e72b30a1ce45c10b144d40ea7a26adcad5aa1d895f455d53c49f326e09610536bb4d",
    "social": {
      "bandcamp": "https://0kult.bandcamp.com/releases",
      "soundcloud": "https://soundcloud.com/0kult",
      "youtube": "https://www.youtube.com/channel/UCfY9hCGTSExHCys5WB24acA/featured",
      "Instagram": "https://www.instagram.com/charlesdef06/",
      "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEdub3BmQ3hCR0xiUVNyRlk1ZA3VFT016QzQwS2tZAeFJjZAm9WTTgzLWJwLTVha0pjWVpxZAk5pOS1Ha05PSmlRSndxaXZAMRzZAOTmY1SEVKWTVxQ1cxNmJ3YlE2SHFTZADRYRDE2SmhKM1RvVQZDZD/"
    },
    "description": "I'm a 31 years old french producer who loves a lot of music styles from the mainstream pop to the death metal.\r\n\r\nHope you'll enjoy my tracks.",
    "profileAddress": "0xfbd6304d4e16a473c692f27a05a889a0a71b9f77",
    "timeSince": "6 hours ago",
    "genres": [
      "Chill",
      "Ambient",
      "Electronic",
      "Drum & Bass",
      "Emo",
      "Metal"
    ],
    "directTipCount": 0,
    "followerCount": 1,
    "id": "5ae9a371137401627a287634"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmPaD2NeyrBP7VqDJJxFwhJugX3ywLusbX6kzxXiEXDbdw",
    "artistName": "PISH",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmPBPv3tb2oXjguSixnsfrYKj6QdQRB8dd7C9bWNR5cmeP",
    "followers": "0",
    "socialUrl": "ipfs://Qmd5No4Xi7fXcGPuxfjqqocGFyRjwWEypo6fVGGKu1JnQU",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "1",
    "image": "/media/cf392abc92e2ac5873e612b9fa042ac1d27bc23f23066ee07d6895d9b78a2aeb50453272c4ab22551f0e2b2bba7b",
    "social": {
      "website": "https://www.facebook.com/pishoriginal/",
      "soundcloud": "https://soundcloud.com/originalpish",
      "youtube": "https://www.youtube.com/user/paulvindenes",
      "Instagram": "@originalpish",
      "twitter": "https://twitter.com/bigpKAKK"
    },
    "description": "Im PISH!",
    "profileAddress": "0x3dee25c182abdc881913b0513c41465a48df14d9",
    "timeSince": "8 hours ago",
    "genres": [
      "Pop Rock Indie"
    ],
    "directTipCount": 0,
    "followerCount": 2,
    "verified": true,
    "id": "5ae9852b779f163a0a853778"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmW8uJeGJLSqAhVQA29JtDvaP7wCdenm8SEkgfHiV3iZ5P",
    "artistName": "KAKKMADDAFAKKA",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmRDf4WDPQnwVvJqh85cyJhAEyb2HtqhqNBzDbzEBJGsir",
    "followers": "0",
    "socialUrl": "ipfs://QmTBodxyXcg52XwP5y3t9EUt2134Vr8EJxDWwPUJjPXCrF",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "2",
    "image": "/media/cf3928baa4a0c86841851396c61515e3d33b992f3c3e5fea5227a68faeac19bb456f474bb9ab0f5e0f710f35b659",
    "social": {
      "website": "https://nb-no.facebook.com/kakkmaddafakkaofficial/",
      "Instagram": "https://www.instagram.com/kakkmaddafakkaofficial/?hl=nb",
      "twitter": "https://twitter.com/kakkmaddafakka"
    },
    "description": "INDIE MUSIC FROM BERGEN NORWAY",
    "profileAddress": "0xe8a9aa9091f55575065c221b64726d8f16609886",
    "timeSince": "9 hours ago",
    "genres": [
      "Indie",
      "POP"
    ],
    "directTipCount": 0,
    "followerCount": 2,
    "verified": true,
    "id": "5ae97bcd02b9de25ae436dbd"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmURbFcjfDjiAZCQLpCseSmh182xozTV7pEgB5SJyVxgdT",
    "artistName": "POOF TROOP ENTERTAINMENT",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmUAWCBfG3d3zSPpzYEvB5Kn77QDuN236fzm5NNpjeM2Jo",
    "followers": "0",
    "socialUrl": "ipfs://QmaWBGmxffn6qbfXT1HHLqKhnmtd1Uvv5Dp1iKcBPSbPxq",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "250",
    "image": "/media/cf392fbf95d7dd4a56e719d2ea300fe2c15ae93a07417cc5206995f993965ae002477f5cc8873b6b275e05749544",
    "social": {
      "website": "Www.facebook.com/outfaaction",
      "youtube": "Www.youtube.com/pooftroopentertainment",
      "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEZA4aldDSTZAsUHc5cEt2UzZAtY3NaMVhCSUFaZAlMySm45eHhQUFN6ck1GY0RkbmdzcG5vRFU2S3JYT3FPd19zdGQyUkJsckNDNVVXYlpGcjFEVThzOUpvRVF2TXRqdHJkVThZAT0ZA4ZA3BzZAnRuSHRHNWcZD/"
    },
    "description": "Producer and Graphic Designer",
    "profileAddress": "0x1f45eaf8516bb2aa0b9db57310888d60f07e4062",
    "timeSince": "10 hours ago",
    "genres": [
      "Hip-hop & Rap",
      "rnb",
      "Beats & Instrumentals"
    ],
    "directTipCount": 0,
    "followerCount": 1,
    "verified": true,
    "id": "5ae966a6675e6f05dfaf1b16"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmYyVMYkmRJMD2KVozd5yAQDf4MLv3y8smKKQ1Nifrovkw",
    "artistName": "STAYLEAVE",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmZCGS1ZpgHK5DS3sA63P3xFWQLL9YfKa8UMkbQ2vqahXP",
    "followers": "0",
    "socialUrl": "ipfs://QmPWcLWorkQM9B7kuVwViAZCmN6fvkL8Luy7Aw3oQxSuYi",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "7",
    "image": "/media/cf3920bd85c7ae7661b335aaa5270ca1c8429a7f15474fed400f88f1df810e985519507c96ab24293b4a292e877b",
    "social": {
      "soundcloud": "https://soundcloud.com/stayleave",
      "youtube": "https://www.youtube.com/channel/UCNwq-qFcXl_sDPBZJJkZVUQ",
      "Instagram": "www.instagram.com/stayleave",
      "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEhJWER1aWoxRkUtRmtoOFdSYXVQMjZA2V2E5TURxR1Fwc1pYQUlxU0tDMnFXYUFVZADB6TTJQUWJDTndLOXZAOY2owWHVfdVZAUOS12a2NhRDRTbEt5QWpsWEI2QmRjYXpJYmFXVzhhS3dEMAZDZD/",
      "twitter": "https://twitter.com/STAYLEAVEmusic"
    },
    "description": "Music Maker from the magic land of Nicaragua.",
    "profileAddress": "0x868fc08c080cf7905c347528f34c2ddfd005105b",
    "timeSince": "21 hours ago",
    "genres": [
      "Dance & EDM",
      "Electronic",
      "Pop",
      "House",
      "Drum & Bass",
      "Downtempo",
      "World",
      "Latin"
    ],
    "directTipCount": 1,
    "followerCount": 3,
    "verified": true,
    "id": "5ae8d26729a8972dbaf79d70"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmUNZBrkv72rVRTivtpqrDPCjwM62dtrjiB3Hm9V3KEPvb",
    "artistName": "Kara Square",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmWKEENX5dFvegkK5TXS3LaQHp8AqKQQ3RuxwgeEThScQk",
    "followers": "0",
    "socialUrl": "ipfs://QmUHY6UbtZKVwRhq4he62oQKk3GLtkUYimHee6voRvfjnK",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "7",
    "image": "/media/cf392db587d1d17424b03b97f50434d98e57f41f763856fa5f2efcfc97933982077370498aae105e19531b258e40",
    "social": {
      "website": "http://www.karasquare.com/",
      "bandcamp": "https://karasquare.bandcamp.com/",
      "soundcloud": "https://soundcloud.com/karasquare",
      "youtube": "https://www.youtube.com/MindMapThat",
      "facebook": "https://www.facebook.com/app_scoped_user_id/10216249012129057/",
      "twitter": "https://twitter.com/KaraSquareMusic"
    },
    "description": "Kara Square is the founder of Thinkroot Records and a ukulele slinging, songwriting, and singing music maker.\r\n\r\nKara released her solo folk pop album, Love Songs for Everyone but Especially Uke, in March of 2013. She released an instrumental album called Ukulele Duels in 2015. She is constantly releasing new music for Thinkroot Records music catalog and actively creates custom music for clients.\r\n\r\nKara Square loves collaborations. She has a Tex-Mex guitar and ukulele surfer pop rock album with Piero Peluche (Italian multi-instrumentalist musician, composer, and producer) called Square Meter. She produced music with Rich Ratvasky as Team Smile and Nod (Look Both Ways Before You Die [2008], Mourning Time [2011], Dust from the Stars [single]). Kara is an active member of the international Creative Commons remix website ccMixter.org.\r\n\r\nIn 2010, Kara Square began her solo career by recording comedic songs that didn’t fit the style of Team Smile and Nod. She made videos to accompany them and blogged about it as Mind Map That. Her video, “Think About Poop,” won Water For People’s Support a Movement Video Competition in December of 2010.\r\n\r\nAs Kara recorded her comedy songs, she posted each track’s stems on ccMixter.org. Since joining ccMixter in June of 2010, her songs have been remixed over 930 times by a talented community of musicians. Based on her enthusiastic participation and her choice to embrace Creative Commons, she was invited to be an Admin on ccMixter in August of 2011.\r\n\r\nKara Square’s vocals and music can be heard on many albums and compilations, including:\r\n\r\n    Free! Music! Sampler – Freeloaded [2010]\r\n    ccMixter – Emergence [2011]\r\n    Lawrence Lessig & ccMixter – Strike the Root [2011]\r\n    Free! Music! Sample – FreeMixter [2011]\r\n    ccMixter & Jamendo – The Best Time of the Year: Side B [2012]\r\n    Free! Music! Sampler – Freedom & Beer [2012]\r\n    Free! Music! Sampler – Viva la FreevoluCCión\r\n    ccMixter – Season of Gratitude [2013]\r\n    Free! Music! Sampler – We Love Sharing [2014]\r\n    ccMixter – Winter Nights [2017]\r\n    Tobias Weber & Bill Ray – Codex Tempore [2018]\r\n    ccMixter – Sing Along with Blue Wave Theory [2018]\r\n\r\nKara Square’s vocals are also featured on acclaimed Turkish musician, Murat Ses’ album Light Cone [2012] (track 2, “Chiral of Past”). In 2015, she was featured in track by Murat Ses called “Endless Dance.” It won Akademia and Global Music Awards (both in the USA) for Best Dance/Electronica Song and charted on Billboard Magazine in 2016.",
    "profileAddress": "0xe58b79981b63c1ea385ff30187f59b1f57277a4e",
    "timeSince": "1 day ago",
    "genres": [
      "Singer-Songwriter",
      "Folk",
      "Rock",
      "Pop",
      "Electronica",
      "Fusions",
      "Chiptune/8-Bit"
    ],
    "directTipCount": 1,
    "followerCount": 5,
    "verified": true,
    "id": "5ae8745222399d27b1690d03"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://Qmbq28Rn4szJeuF4uHqJLsf3BnhQ7pKuPmtTiMFi7pqWsc",
    "artistName": "Aleksander Olav",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmQSNyrAvyWi6Lq19e72vYJPHYt4i8HoeW2qj6JP4ENCoh",
    "followers": "0",
    "socialUrl": "ipfs://QmVzNm5j4SmEWuHqqg16TidP6sWet83JAoq799LnrWSJzf",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "2",
    "image": "/media/cf392bad8ceded6d67ad2a88a62f2ea382669b7e332d7dfb5f07b0898fe020bc5176374097ff3f4b797e0605b043",
    "social": {
      "website": "https://aleksanderolav.com.",
      "soundcloud": "https://soundcloud.com/aleksander-olav",
      "youtube": "https://www.youtube.com/channel/UCCwGh-qeEpSHAaO7TpQ_Ezw",
      "Instagram": "https://instagram.com/aleksander_olav",
      "facebook": "https://www.facebook.com/app_scoped_user_id/10160447908110714/",
      "twitter": "https://twitter.com/AleksanderOlav_"
    },
    "description": "I make music of all sorts",
    "profileAddress": "0x5ccd9f6f414a25e47bc3c94319a16ff2de21e942",
    "timeSince": "2 days ago",
    "genres": [
      "Electronic",
      "Dance & EDM",
      "Pop",
      "Remixes"
    ],
    "directTipCount": 0,
    "followerCount": 6,
    "verified": true,
    "id": "5ae7c6925529d827a625d7bf"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmUfVviy61MJEK3bzWgaj4CJMXtCwi8yZ8VNvBDZj6aJ9Y",
    "artistName": "Cael Willis",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://Qmajd2eU71Ay6Rqyqt8cKH3it9UoZEXh9RssavpnG1U4Le",
    "followers": "0",
    "socialUrl": "ipfs://QmbJWAESqCsf4RFCqEY7jecCashj8usXiyDNfKtZCwwzGb",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "3",
    "image": "/media/cf391b94a6a6fa7926e53c98a6312eebca77942f0e3c04c2636791d2bc9d30bb0d7376429cbf05750a0a1d72934e",
    "social": {
      "twitter": "https://twitter.com/Cael_the_Willis"
    },
    "description": "I am Cael",
    "profileAddress": "0x1a0626025efc96d7a812b6df98d8a45158f3ce3b",
    "timeSince": "2 days ago",
    "genres": [
      "Pop"
    ],
    "directTipCount": 0,
    "followerCount": 3,
    "id": "5ae7bd02b86b671d7221ee23"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmctC2CBtV4v9nRUYymYHygmxyn1b2gU9PQYqR1Pae3S11",
    "artistName": "Sergy el Som",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmS7byNdeq6gEUHjkpncd4QfGnCBghtWoFeakSTe3ubBFj",
    "followers": "0",
    "socialUrl": "ipfs://QmYhLaprt6MmaYBFYWi98ybBGWsizTrgfxCc3rmUbv5oox",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "117",
    "image": "/media/cf3929c9a0edd14874a54b86d53617f8d073c22f214066cd503087ff81b01c845b676050969a217e7e4e2a049941",
    "social": {
      "google": "linguagemmusical10@gmail.com",
      "soundcloud": "https://soundcloud.com/sergyelsom",
      "youtube": "https://www.youtube.com/channel/UCgMRIXxwcfv2Kb3VE5rIulA",
      "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEg3VGVpTTgtTDctODNiWlNoMDVwNXZA3WDd4UWhZAWWZA0dUNKUUJ6ZAElkLXo5NjhHQzNwSzgxNVBnS2NFVWpoeEFpSkhSQUFDUUVnUUhiRG0xYTRZAempOalc5cUlpYmc3QlljUmV1aTEzRk11WTl3VHcZD/",
      "twitter": "https://twitter.com/SergyelSom"
    },
    "description": "Sergy el Som is a brazilian music, composer and producer. ",
    "profileAddress": "0x98e38af7f0cba104855e6fbf56527b3ae0b51712",
    "timeSince": "2 days ago",
    "genres": [
      "Instrumental",
      "celtic",
      "christian music"
    ],
    "directTipCount": 0,
    "followerCount": 4,
    "verified": true,
    "id": "5ae79b2216f17a67e1c4ec28"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH",
    "artistName": "Datboi Burt",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmSWYnBBwGAe3R4NKAbg4cxZsH6sAJTCqk1PXutNBnXfcu",
    "followers": "0",
    "socialUrl": "ipfs://QmTkvwBKzTfg17QE9nHA7CMxs5kRBrY2hta5P4PvPFoXQv",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "253",
    "image": "/media/cf3929a99bfadd6e66933c84a3316bdcf042ce2b71174ff16416f2cea7923c90454a3461a5bc01550f551020bc5e",
    "social": {
      "soundcloud": "Datboi burt",
      "linkedin": "Datboi burt",
      "youtube": "Datboi burt",
      "Reverbnation": "burtdapapergetta",
      "Instagram": "Da_paper_getta",
      "facebook": "https://www.facebook.com/app_scoped_user_id/782231545282892/"
    },
    "description": "",
    "profileAddress": "0xa8ad04ea792ef3d407dec410ad03ba0e6705b967",
    "timeSince": "2 days ago",
    "genres": [
      "Hip-hop & Rap"
    ],
    "directTipCount": 0,
    "followerCount": 3,
    "id": "5ae78e29d74c2b5373dabbbd"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmfZD97P59nHDGhLN5spwJ6HGFUGnLAYJrXBXL9WvCVWsb",
    "artistName": "crazzycatz",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmehVrZRKi2JZjXx4CrDTJ5QzJNAxr3vFHhng3KbjRibPS",
    "followers": "0",
    "socialUrl": "ipfs://QmWFebms5ce3k1UWFoiGPg7LfDxiXRNw96fpteTP1jNx9t",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "258",
    "image": "/media/cf391f9694e6c57e5abd4fabca0907ea8f40de08113e02fa6d148afc9eaa5ba572696d5f9afa3e79276921248f78",
    "social": {
      "soundcloud": "https://soundcloud.com/crazzycatz",
      "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEVrY05Ebm8tQnkwb1M5YTRTb1FJNkJMWFRWUlJtbVp1WmN6NlZASb19KU1FaR3JOenRmQjB2YnRjVGtoOXdOV3hYcS15UFdSS3NnQlR3TjJFTS1hb1BraTlCY0twYUFIb1BhUHhaamtiYUJfRGZAYcVEZD/"
    },
    "description": "am a producer who experiment alot with sounds i started a year ago  follow me as i involve myself ",
    "profileAddress": "0x5512bfb0d5e79637f7d1498e6a5fde124da6a06c",
    "timeSince": "2 days ago",
    "genres": [
      "electronic .experimental. chill"
    ],
    "directTipCount": 1,
    "followerCount": 7,
    "id": "5ae763a4e874bc15d9da47b9"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmUMiVaear9ZSJeEsgLAwwkGBkF4sW5QydqnM7EJkr2fHf",
    "artistName": "LITESKIN",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmaeRuijzzV9D7XqpGPzLHN6Zgco9jnxxmg5Ang7K52QTb",
    "followers": "0",
    "socialUrl": "ipfs://QmTdHMSG8VYmkKyF4dodL3sCRsuLpEYbvAj3piANTkij72",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "250",
    "image": "/media/cf391b9b90e1f6466bae2bd8d45407e3cb44fc36093c799d4d39a7d2dfb206ab4c4c6204bca7122c060e7a178b49",
    "social": {
      "website": "https://twitter.com/LITESKIN321",
      "soundcloud": "https://soundcloud.com/user-937328534",
      "youtube": "https://www.youtube.com/channel/UCLqfx4y9nqLiMO3obfa88dw",
      "Instagram": "https://www.instagram.com/realliteskin123/?hl=en",
      "Medium": "https://www.facebook.com/george.escalante.77",
      "facebook": "https://www.facebook.com/app_scoped_user_id/2034511216578651/",
      "twitter": "https://twitter.com/LITESKIN321"
    },
    "description": "LITESKIN (Living It Through Every Situation Known In Nature) is an artist known for his incredible word play and meaningful thought provoking music.  Self described as the, \"WordSmith With A Purpose\", there is no topic that he will shy away from.  Straight from New York City's concrete jungles and part of the collective known as, \"SOUNDMINDS\", this is an artist who will keep you salivating due to context and his wizardry with words.  Pay attention and keep your ears prepared for HipHop and SpokenWord's acolyte.   ",
    "profileAddress": "0x7f9ab296cf0359cf9a3e89c0c3bb357867887600",
    "timeSince": "2 days ago",
    "genres": [
      "HipHop/SpokenWord"
    ],
    "directTipCount": 0,
    "followerCount": 1,
    "id": "5ae72b260190e841db1e56cd"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmTe3Ngvnkui3mgm6rM3n4Hz9WeNvFdxL5WWp7NnA7dSvq",
    "artistName": "Franc Castillejos",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmSSEYTGPEqekwfrSJNjZ8jnvNUaePnTbAt9eTvEuJ4j5K",
    "followers": "0",
    "socialUrl": "ipfs://QmTxv73gNxmmTLkmtzZzs9xvVKFzNrvhbcfesdWDysb5ug",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "253",
    "image": "/media/cf3929ad87cdcb6b41910c84fb1439e0e849e2261f4c5dc5611091dc8388068756607108989d035e38717c2cea60",
    "social": {
      "soundcloud": "https://m.soundcloud.com/franc-castillejos",
      "facebook": "https://www.facebook.com/app_scoped_user_id/10100406935920118/"
    },
    "description": "Hi, I’m from Guatemala, and I write and record tunes any chance I get. ",
    "profileAddress": "0x0d18e0963b9da6ff963b3073660f3e6052e983a9",
    "timeSince": "2 days ago",
    "genres": [
      "Folk",
      "Pop",
      "Rock",
      "Indie"
    ],
    "directTipCount": 0,
    "followerCount": 1,
    "verified": true,
    "id": "5ae723e2ced59737bbad3e64"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmafPHMjaRqsacrQYVSnVriwNqtxHDtDcJjMSbfE9uokc3",
    "artistName": "Justin Demix",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmbNGviTFjz8ckxy5QYVWdAQnEqBmQWJn1cqHXUyBbCSS4",
    "followers": "0",
    "socialUrl": "ipfs://QmSjaPpsJmRWJHUfsdVsX4HSpPfDRt8kKTpKK5wNyProG1",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "255",
    "image": "/media/cf3918b085e2f67857be07d9f30827eb8e52f51a121076fa791bb5ff8b893f995a106640b59120620f590b158c1f",
    "social": {
      "website": "https://offjustindemix.wixsite.com/justindemix",
      "soundcloud": "soundcloud.com/justindemix",
      "youtube": "https://www.youtube.com/channel/UCW1ZntuOMWMwQffIz_xRYzg",
      "Instagram": "https://www.instagram.com/justin_demix/",
      "facebook": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEZAlNGI4Sy1NLXR0Nmx1Ql9TWmM2ZAGw5YzR0S2xyUkhFWldOdFJRa0s2cm84cTFnTmNSb1Radml5WlJ3czVNeGJYV295UXZAjZA1A2eFBCeEVsc3FiQTYtT1NWTWdIWWNDU041YVlRN29yXzNVOUNzWncZD/",
      "twitter": "https://twitter.com/justin_demix"
    },
    "description": "Au début des années 90, à l'arrivée d'un nouveau courant musical à l'époque nommé \"New Beat\" suivi de très près par sa grand﻿e sœur \"Techno\", ses goûts musicaux se marqueront définitivement, notamment pour la House Music et la Soulfull. \r\nA son actif, 6 ans de radio Fm de 93 à 99, et diverses expériences de djing tel qu'une soirée au Soho (Bruxelles) pour le site Ready2Move en 2008, une autre au Notger (Liège) en 2013 en compagnie de Dj Jidee et quelques diverses apparitions.\r\nEn 99, il décide de se lancer dans la production, fait une longue pause et sort enfin son 1er Album \"Escape to Paradise\" en 2008 (dont trois titres ressortiront sous forme d'E.P en 2013 grâce au label Français Expended Records), ensuite suivra \"The New Beginning\" en 2009 et un single \"The revenge\" en 2010. On notera également la réalisation de deux ou trois remixes notamment pour Gentle Fred et Miss Leeloo et deux participations à des concours dont une pour le label Defected Records et une autre en 2014 pour la \"R.T.B.F. Dj Experience ou il termine à une honorable 7ème place.\r\nEn février 2012, il devient Dj Résident sur BEATWINUS Radio (Paris) (webradio spécialisée House & Soulfull ) où il côtoie alors les plus grands: Joe Negro, Dj Meme, Dj Spen, Frankie Knuckles, Grant Nelson, Quentin Harris, Jamie Lewis, Groove Assassin, Shazz, Jon Cutler, et bien d'autres encore issus de la scène house internationale. \r\nSuivra ensuite une résidence à Buenos Aires et Barcelone pour d'autres webradios.\r\nSeptembre 2015, il est de retour comme Guest Dj notamment sur Soulside Radio (Paris)....\r\n\r\nAt the beginning of the 90s, with the arrival of a new musical current at the time named \"New Beat\" followed closely by his big sister \"Techno\", his musical tastes will definitely mark, especially for House Music and the Soulfull.\r\nHe has worked for 6 years of Radio Fm from 93 to 99, and various djing experiences such as an evening at the Soho (Brussels) for the Ready2Move site in 2008, another at the Notger (Liège) in 2013 with Dj Jidee And some various apparitions.\r\nIn 1999, he decided to start production, took a long break and finally released his 1st album \"Escape to Paradise\" in 2008 (three titles will be released in the form of EP in 2013 thanks to the French label Expended Records), then Followed by \"The New Beginning\" in 2009 and a single \"The revenge\" in 2010. We also note two or three remixes, notably for Gentle Fred and Miss Leeloo and two contests, one for the Defected Records label and one Another in 2014 for the \"RTBF Dj Experience\" where he finished at an honorable 7th place.\r\nIn February 2012, he became a resident DJ on BEATWINUS Radio (Paris) (house & soulfull webradio) where he met the biggest: Joe Negro, Dj Meme, Dj Spen, Frankie Knuckles, Grant Nelson, Quentin Harris, Jamie Lewis, Groove Assassin, Shazz, Jon Cutler, and many others from the international house scene.\r\nThen followed a residence in Buenos Aires and Barcelona for other webradios.\r\nSeptember 2015, he is back as Guest Dj especially on Soulside Radio (Paris) ....",
    "profileAddress": "0x29ef91d5bf15388c34ab4a3a4d00b28fe03be353",
    "timeSince": "2 days ago",
    "genres": [
      "Easy Listening"
    ],
    "directTipCount": 3,
    "followerCount": 4,
    "verified": true,
    "id": "5ae7134785d00f19d0c0598c"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH",
    "artistName": "Peterjack",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmPUuEaBvDVSRK3pELUTxAkLGT8sSpvfhjnPcUCiH6aZZy",
    "followers": "0",
    "socialUrl": "ipfs://QmfG3TuVw6Lfj9wgdCJZq8QApGis4nuZciMet96GBGjeDo",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "8.99",
    "image": "/media/cf392aabb7d1fe6e67902bb2c2286ce2fe4ff9183d355ce7500afcceb5a81eb55c4b6b619e9c3672050d291c8552",
    "social": {
      "website": "https://www.facebook.com/PeterjackOfficial",
      "twitter": "https://twitter.com/DJpeter1T"
    },
    "description": "",
    "profileAddress": "0x2c3c404a7532dcab1bfadd52e628eaf0fad50e83",
    "timeSince": "2 days ago",
    "genres": [
      "Dance & EDM"
    ],
    "directTipCount": 0,
    "followerCount": 1,
    "id": "5ae6f4026ecd0b6f2cd02ffa"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmZQzYXzJncmFL3fRCpykoFYcBbXxaixuzu4aBp82zhXjw",
    "artistName": "Beat Maker",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmPSECRBSz5BMD4Tb7cqrkybHEU6NaN3WgFSRVqwqVTCBD",
    "followers": "0",
    "socialUrl": "ipfs://QmeV2fbc4QXr3sqVx4cKmDcs5a1LhwmhLYMKt842Y8wFGd",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "9",
    "image": "/media/cf392aad87d7cd6e42ae48a3dd276bc6d934cf3d371f4ec95f1b918ba8b926e063464362af9f046c3c6d1c059d6f",
    "social": {
      "Instagram": "@rbthebeatman",
      "facebook": "https://www.facebook.com/app_scoped_user_id/165413534295630/"
    },
    "description": "Producer/Engineer\r\n\"Always Working\"",
    "profileAddress": "0xd2c9ea2378058d2bd9da286674c012c3372352c4",
    "timeSince": "2 days ago",
    "genres": [
      "Hip Hop/R&B"
    ],
    "directTipCount": 6,
    "followerCount": 2,
    "id": "5ae6e3ccf594795a878b601f"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmYptnPKKZ74Xumh4ZyjVJ8Qvn8x371fsYNhCL5FLUEgYd",
    "artistName": "Stagma",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmNYWhxBQNv8RWtQuLKcQ2Uot6LxUeurC92Gwb8hjonF6s",
    "followers": "0",
    "socialUrl": "ipfs://QmWCy32U7aCYYSFygZ4WVSCqpbZSrzpkBSvBvR8GvqHRD5",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "5",
    "image": "/media/cf3934a795fce76e409a0bd9c2342bc3ce4fe72f144662c4636888c5b3bd1da1771837768aab4d7327542600e958",
    "social": {
      "website": "http://www.stagmaband.com",
      "bandcamp": "https://stagma.bandcamp.com/album/stagma",
      "youtube": "https://www.youtube.com/channel/UCsFshomW44DRZkutPxB5h9A",
      "facebook": "https://www.facebook.com/app_scoped_user_id/10215813481032674/"
    },
    "description": "Stagma is an international heavy rock collaboration formed by composer/guitarist Alexandre Santos (Scar For Life), and features Rob Mancini (Scar For Life, Boneyard Dog) on vocals, Vinny Appice (Black Sabbath, Dio) and Patrick Johansson (Yngwie Malmsteen) on drums, Neil Fraser (TEN) on lead guitars and Joe Petro on bass.\r\nOur debut single, Pokerface, was released in October 2017 and is available for download on all good streaming services. Our debut album is due for release in the new year and includes a bonus track featuring drummer Simon Wright (AC/DC) and an electronic introduction from gaming music legend, Jeroen Tel.",
    "profileAddress": "0xa93b947d5f758350909828df1114e07e1438aeaf",
    "timeSince": "2 days ago",
    "genres": [
      "rock",
      "alt",
      "metal"
    ],
    "directTipCount": 1,
    "followerCount": 2,
    "verified": true,
    "id": "5ae6e1ce7dbdaf4eb4f246d8"
  },
  {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmUHtEcYRQ9UQqy3sqXbLsnycJwwrbXavCCa3ANHUGoH6s",
    "artistName": "KennyCleod",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmUFqVBZYJw9MQ56eiaKRQiB14AJVZzMvmw71Cia5UpCrr",
    "followers": "0",
    "socialUrl": "ipfs://QmZbAe2P5K8WpjLHQo8yJ7zLNgJfatQam2RR2XSFQFYwUi",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "2",
    "image": "/media/cf392fb8b3c2dd76489e0ad8dd326aa4de6acd0717255ee9266a85f7b082129e424c7206cc8a1c7a786e3805ad59",
    "social": {
      "website": "https://www.facebook.com/KennyCleod",
      "soundcloud": "https://soundcloud.com/kennycleod",
      "youtube": "https://www.youtube.com/user/KennyCleod",
      "twitter": "https://twitter.com/KennyCleod"
    },
    "description": "I'm a song writer and music producer!",
    "profileAddress": "0x1f700d77e931fbb165683b6873f33f0425cd68fb",
    "timeSince": "2 days ago",
    "genres": [
      "Hip-hop & Rap"
    ],
    "directTipCount": 0,
    "followerCount": 1,
    "id": "5ae6cbc88973c330f52f3013"
  }
]					`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="https://musicoin.org/json-api/artists/find">
				<pre>
					<code>
						{`
[
  {
    "id": "0xf286501f4732fd941e2015c7188deb73475712c3",
    "label": "Fyah_B Music (0xf286501f4732fd941e2015c7188deb73475712c3)",
    "value": "0xf286501f4732fd941e2015c7188deb73475712c3"
  },
  {
    "id": "0xdf8b38c7529283de24170d744f0b16073d503e2b",
    "label": "Camille Chardon (0xdf8b38c7529283de24170d744f0b16073d503e2b)",
    "value": "0xdf8b38c7529283de24170d744f0b16073d503e2b"
  },
  {
    "id": "0xfbd6304d4e16a473c692f27a05a889a0a71b9f77",
    "label": "0kult (0xfbd6304d4e16a473c692f27a05a889a0a71b9f77)",
    "value": "0xfbd6304d4e16a473c692f27a05a889a0a71b9f77"
  },
  {
    "id": "0x3dee25c182abdc881913b0513c41465a48df14d9",
    "label": "PISH (0x3dee25c182abdc881913b0513c41465a48df14d9)",
    "value": "0x3dee25c182abdc881913b0513c41465a48df14d9"
  },
  {
    "id": "0xe8a9aa9091f55575065c221b64726d8f16609886",
    "label": "KAKKMADDAFAKKA (0xe8a9aa9091f55575065c221b64726d8f16609886)",
    "value": "0xe8a9aa9091f55575065c221b64726d8f16609886"
  },
  {
    "id": "0x1f45eaf8516bb2aa0b9db57310888d60f07e4062",
    "label": "POOF TROOP ENTERTAINMENT (0x1f45eaf8516bb2aa0b9db57310888d60f07e4062)",
    "value": "0x1f45eaf8516bb2aa0b9db57310888d60f07e4062"
  },
  {
    "id": "0x868fc08c080cf7905c347528f34c2ddfd005105b",
    "label": "STAYLEAVE (0x868fc08c080cf7905c347528f34c2ddfd005105b)",
    "value": "0x868fc08c080cf7905c347528f34c2ddfd005105b"
  },
  {
    "id": "0xe58b79981b63c1ea385ff30187f59b1f57277a4e",
    "label": "Kara Square (0xe58b79981b63c1ea385ff30187f59b1f57277a4e)",
    "value": "0xe58b79981b63c1ea385ff30187f59b1f57277a4e"
  },
  {
    "id": "0x5ccd9f6f414a25e47bc3c94319a16ff2de21e942",
    "label": "Aleksander Olav (0x5ccd9f6f414a25e47bc3c94319a16ff2de21e942)",
    "value": "0x5ccd9f6f414a25e47bc3c94319a16ff2de21e942"
  },
  {
    "id": "0x1a0626025efc96d7a812b6df98d8a45158f3ce3b",
    "label": "Cael Willis (0x1a0626025efc96d7a812b6df98d8a45158f3ce3b)",
    "value": "0x1a0626025efc96d7a812b6df98d8a45158f3ce3b"
  },
  {
    "id": "0x98e38af7f0cba104855e6fbf56527b3ae0b51712",
    "label": "Sergy el Som (0x98e38af7f0cba104855e6fbf56527b3ae0b51712)",
    "value": "0x98e38af7f0cba104855e6fbf56527b3ae0b51712"
  },
  {
    "id": "0xa8ad04ea792ef3d407dec410ad03ba0e6705b967",
    "label": "Datboi Burt (0xa8ad04ea792ef3d407dec410ad03ba0e6705b967)",
    "value": "0xa8ad04ea792ef3d407dec410ad03ba0e6705b967"
  },
  {
    "id": "0x5512bfb0d5e79637f7d1498e6a5fde124da6a06c",
    "label": "crazzycatz (0x5512bfb0d5e79637f7d1498e6a5fde124da6a06c)",
    "value": "0x5512bfb0d5e79637f7d1498e6a5fde124da6a06c"
  },
  {
    "id": "0x7f9ab296cf0359cf9a3e89c0c3bb357867887600",
    "label": "LITESKIN (0x7f9ab296cf0359cf9a3e89c0c3bb357867887600)",
    "value": "0x7f9ab296cf0359cf9a3e89c0c3bb357867887600"
  },
  {
    "id": "0x0d18e0963b9da6ff963b3073660f3e6052e983a9",
    "label": "Franc Castillejos (0x0d18e0963b9da6ff963b3073660f3e6052e983a9)",
    "value": "0x0d18e0963b9da6ff963b3073660f3e6052e983a9"
  },
  {
    "id": "0x29ef91d5bf15388c34ab4a3a4d00b28fe03be353",
    "label": "Justin Demix (0x29ef91d5bf15388c34ab4a3a4d00b28fe03be353)",
    "value": "0x29ef91d5bf15388c34ab4a3a4d00b28fe03be353"
  },
  {
    "id": "0x2c3c404a7532dcab1bfadd52e628eaf0fad50e83",
    "label": "Peterjack (0x2c3c404a7532dcab1bfadd52e628eaf0fad50e83)",
    "value": "0x2c3c404a7532dcab1bfadd52e628eaf0fad50e83"
  },
  {
    "id": "0xd2c9ea2378058d2bd9da286674c012c3372352c4",
    "label": "Beat Maker (0xd2c9ea2378058d2bd9da286674c012c3372352c4)",
    "value": "0xd2c9ea2378058d2bd9da286674c012c3372352c4"
  },
  {
    "id": "0xa93b947d5f758350909828df1114e07e1438aeaf",
    "label": "Stagma (0xa93b947d5f758350909828df1114e07e1438aeaf)",
    "value": "0xa93b947d5f758350909828df1114e07e1438aeaf"
  },
  {
    "id": "0x1f700d77e931fbb165683b6873f33f0425cd68fb",
    "label": "KennyCleod (0x1f700d77e931fbb165683b6873f33f0425cd68fb)",
    "value": "0x1f700d77e931fbb165683b6873f33f0425cd68fb"
  }
]					`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="https://musicoin.org/json-api/tracks/new">
				<pre>
					<code>
						{`
[
{
  "resourceUrl": "eipfs://QmUCS18KzQPcNrjJ6FfqoeRRYBudK2XjXy4mvdkxwvHkFU",
  "contentType": "audio/mp3",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Liar",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0x65fa529de730617d36cd5bf850da620c39401a84",
  "artistName": "Ray Chapman",
  "totalEarned": "0",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "0",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmPbwDdj5w6xM7McuiTaY8zkY9tz7gBRMBEEFuPb6UxJ5d",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmQ3z42G7FHB7QyiPrsLMxpu8XsDbrAEbbgQGjXVPGNMbJ",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0x65fa529de730617d36cd5bf850da620c39401a84",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "0",
  "address": "0xfbbef507d96ec935d008638b37d307d59f0f7a3f",
  "image": "/media/cf392a9cb5d0fb4624a34b99dd5412f1ce6af82d1c4c4dc04e67b0c7d1bf2a8179634074bbbc25797b6e300cea4f",
  "audioUrl": "/ppp/38fb5b07fa63c817e3d64ef3cc20f5e7f5c237aebb83b816c242da8b16c0bbaddccd8cb4a9ef9a9e83248fb5f66894c3bdb9f656c526e83e",
  "genres": [
    "Alternative Rock",
    "Indie",
    "Rock"
  ],
  "languages": [],
  "moods": [],
  "regions": [
    "United Kingdom"
  ],
  "description": "",
  "timeSince": "6 mins ago",
  "directTipCount": 0,
  "directPlayCount": 0,
  "releaseDate": "2018-05-02T17:36:51.289Z",
  "tx": "0xf1d2121aa2a4e8df2211ed8000e0b92ee0d9771255d75de830e1a5b43f0624a5"
},
{
  "resourceUrl": "eipfs://QmNxBvocXHmamzsbdNNeSmhny5yyNitFEgi2Zjy1AVL4su",
  "contentType": "audio/mp3",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Wassvp x Y.M - Pacifista",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0xb8e9a3e480210ae26cef7fcddb8c0ed77d3808ec",
  "artistName": "Wassvp",
  "totalEarned": "0",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "0",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmVb6ZDtfMLSdqwahEmGVe3E3yT5HPj6uqjMc9yTLyrvFf",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://Qmd42LgbjBbnoPLaH7BTP6sgeYk97aN35czzLRCE8t4eg7",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0xb8e9a3e480210ae26cef7fcddb8c0ed77d3808ec",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "0",
  "address": "0x0bf0d2ce500b3b9f06060d43c65e37f6c35166d5",
  "image": "/media/cf392c9cf4cedb58779931b2f41228f3d346c10b131104ee24279088ae8802e541506f7c9ef00c4f01423a30994d",
  "audioUrl": "/ppp/38fb0d07fe36ca10b0841ffaca27a5bcff9163a8bb8dbe41ce138a8a4796b8addeced6e1acb89bc9d4778fb5f66894c3bdb9f656c526e83e",
  "genres": [
    "Hip-hop & Rap"
  ],
  "languages": [],
  "moods": [],
  "regions": [
    "Toulouse"
  ],
  "description": "Sortie de Secours 1.",
  "timeSince": "38 mins ago",
  "directTipCount": 0,
  "directPlayCount": 0,
  "releaseDate": "2018-05-02T17:04:20.297Z",
  "tx": "0xe9e80f5f7d422f232b4b9b47df542004c4d68381ff79bb8a3228217e410614f9"
},
{
  "resourceUrl": "eipfs://Qma6h2RKsXJJ9YanPyNLuJPweGBRpy4V2Gp9zyzCnZR7yK",
  "contentType": "audio/mp3",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Wassvp - Serenade",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0xb8e9a3e480210ae26cef7fcddb8c0ed77d3808ec",
  "artistName": "Wassvp",
  "totalEarned": "1000000000000000000",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "1",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmVb6ZDtfMLSdqwahEmGVe3E3yT5HPj6uqjMc9yTLyrvFf",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://Qmd42LgbjBbnoPLaH7BTP6sgeYk97aN35czzLRCE8t4eg7",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0xb8e9a3e480210ae26cef7fcddb8c0ed77d3808ec",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "1",
  "address": "0x62c2c35940070c8ff230e08bd982b4ff622953b6",
  "image": "/media/cf392c9cf4cedb58779931b2f41228f3d346c10b131104ee24279088ae8802e541506f7c9ef00c4f01423a30994d",
  "audioUrl": "/ppp/38fb0b57fb34cd11e6d81efaca72a6bdfe9135acb88beb15c2428d854ac1e9aede9e83e0abb098ccd2748fb5f66894c3bdb9f656c526e83e",
  "genres": [
    "Hip-hop & Rap"
  ],
  "languages": [],
  "moods": [],
  "regions": [
    "Toulouse"
  ],
  "description": "Sortie de Secours 1.",
  "timeSince": "1 hour ago",
  "directTipCount": 0,
  "directPlayCount": 1,
  "releaseDate": "2018-05-02T16:38:10.731Z",
  "tx": "0x99b3d6c9202adea4a92589b3b770f8d1cf5901ee1326a006a1dcf78d5bf2cc0c"
},
{
  "resourceUrl": "eipfs://QmYL4PYhXGsGjs6qXn2haWspW8kxQDigXLeMj1FmLK18FS",
  "contentType": "audio/mp3",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Outro (instrumental)",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0xb4c3840fee323fcd4d107e70694dc00d7f38f820",
  "artistName": "Last Ravage Opinion",
  "totalEarned": "3000000000000000000",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "3",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmaBkCiLJzNRM7Yzdwm8uoUUjxiKuD1GJZJoPCfauRPR6T",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmPE2S96bLMDrn3NriAcpw1TRTWhA1RqUus57nm8GNt3qW",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0xb4c3840fee323fcd4d107e70694dc00d7f38f820",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "3",
  "address": "0x8655ed04af846d176f590af0ff4eac8b9484a3ce",
  "image": "/media/cf391bbca9d7f6605bae33b3dd5406e8df74c174301b62fe7d26adf6939c59947e7b4f5ead8a137a38691814e97f",
  "audioUrl": "/ppp/38fb0553ad33cb46e3d54bacc271a0baf7c065f8be82be449c108fda4696eaf9809a8ce6a1bdccccd3278fb5f66894c3bdb9f656c526e83e",
  "genres": [
    "Rock",
    "Alternative Rock",
    "Experimental",
    "Psychedelic"
  ],
  "languages": [
    "Instrumental"
  ],
  "moods": [],
  "regions": [],
  "description": "© Music & Lyrics By Last \"Ravage\" Opinion \r\n© Image: \"Stellular . Vega and Altair\" By Alenia \r\nalenia.wixsite.com/behemothrealms",
  "timeSince": "1 hour ago",
  "directTipCount": 0,
  "directPlayCount": 3,
  "releaseDate": "2018-05-02T16:27:28.274Z",
  "tx": "0x6a2d311dea2fb19b6254b07dfa59ae7c5228d88a71a3c5471ea611805074536a"
},
{
  "resourceUrl": "eipfs://QmcKEJuYUk8JFMRyd1uCjrysF7SA3V3vKW1g7LbVTL7zjw",
  "contentType": "audio/mp3",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Resignation ",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0x15c49e7865d142a54c0ad820668d01ac322f72f6",
  "artistName": "Aja Novolia  /Aja NB/",
  "totalEarned": "0",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "0",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmTZ1hb7dfEeAzynswiAU2jY9x9YSExhqvPYXZDxgWCU64",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmW33Ch6teJoSZSy2MNCK4auTBZwRDqyMgxMiEm3xByEGj",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0x15c49e7865d142a54c0ad820668d01ac322f72f6",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "0",
  "address": "0x36c9ba5a28ce85337973275473348d8cdb301ab0",
  "image": "/media/cf392ea4f3fcfd1b75b23884d11926fcc874c50d10465df22e26fde4b59d10bb45575568a59331632a6c0b13e91f",
  "audioUrl": "/ppp/38fb0e53fb3fcc43e68018f29920aeebf5c464a7bc88bc12cf14de8f41c7b3fe809bd1b0aab99c9ed2728fb5f66894c3bdb9f656c526e83e",
  "genres": [
    "Electronic"
  ],
  "languages": [],
  "moods": [],
  "regions": [
    "Czechia",
    "Croatia"
  ],
  "description": "",
  "timeSince": "2 hours ago",
  "directTipCount": 0,
  "directPlayCount": 0,
  "releaseDate": "2018-05-02T15:45:13.256Z",
  "tx": "0x63e52e18f804432d661ff39b65eb73f47e6d403254f3b06cf992021a10144413"
},
{
  "resourceUrl": "eipfs://QmPYc5ZGftWy7Ephq9B6Kj1ymG6RmeDxz1cbrW4KMSFT3f",
  "contentType": "audio/mp3",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Raga - Critikal ",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0xf286501f4732fd941e2015c7188deb73475712c3",
  "artistName": "Fyah_B Music",
  "totalEarned": "0",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "0",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmYyAtxYF8CtxoA7NYJd4TtPcFK8dMNPUBxsAAmHFpduQg",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmazcG1pk9kwnLV3GS6KssKYpdRenevycv1bDycheP1LZo",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0xf286501f4732fd941e2015c7188deb73475712c3",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "0",
  "address": "0x7b6d92f9141e60479809c2df17bf9009cfe8f42f",
  "image": "/media/cf39238783e0e77557ec3e95e80c1ea5f55ae628712043fb74188f858295268361637d42bc8818530b4b2c338e4c",
  "audioUrl": "/ppp/38fb0a07ae629710b5d81bfecb20a0eef2c06aa6bb82ed179e46d88b1095b2aa88c1d6b4fcb1cbcb82248fb5f66894c3bdb9f656c526e83e",
  "genres": [
    "Reggae",
    "Remixes",
    "Roots",
    "Beats & Instrumentals",
    "Dance & EDM",
    "Dancehall",
    "Trap",
    "Hip-hop & Rap",
    "Fusion",
    "Roots Music",
    "Reggae Music",
    "Rasta",
    "Jah"
  ],
  "languages": [],
  "moods": [],
  "regions": [
    "South America",
    "Guyana"
  ],
  "description": "Raga is an upcoming Reggae Roots singer based in the South Americas,\r\nInspired and influenced by Tenor Saw & Barington Levi, Raga has an powerful and stern message of Self Awareness and His Imperial Haile Selassie's teachings. Look out for more works from Raga soon to come.",
  "timeSince": "3 hours ago",
  "directTipCount": 0,
  "directPlayCount": 0,
  "releaseDate": "2018-05-02T14:33:52.097Z",
  "tx": "0x9799306de229779b1522134d747b73ad8c6c041d6285ac8e0028332bdc4da6b8"
},
{
  "resourceUrl": "eipfs://QmVpxfHLEfXMjZiMAjurkVo6RQwczUduUAUH24mVqBE2ZF",
  "contentType": "audio/mp3",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Take A Stand ",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0x7f9ab296cf0359cf9a3e89c0c3bb357867887600",
  "artistName": "LITESKIN",
  "totalEarned": "1000000000000000000",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "1",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmaeRuijzzV9D7XqpGPzLHN6Zgco9jnxxmg5Ang7K52QTb",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmQqdD5z8A8WPMGoHJubKq4DeoNB2pG72PiJWSZx5eCVva",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0x7f9ab296cf0359cf9a3e89c0c3bb357867887600",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "1",
  "address": "0xa61b364023180f5d9ba6c2b1bd34b5db10a3d469",
  "image": "/media/cf391b9b90e1f6466bae2bd8d45407e3cb44fc36093c799d4d39a7d2dfb206ab4c4c6204bca7122c060e7a178b49",
  "audioUrl": "/ppp/38fb5c53a9649d14e7d118f9cb7da6b8f3936afcea8ded1798118bd841c7e9afdc9a84e2f8bac9cb867b8fb5f66894c3bdb9f656c424e13b",
  "genres": [
    "HipHop/SpokenWord",
    "Hip-hop & Rap"
  ],
  "languages": [],
  "moods": [],
  "regions": [
    "New York City"
  ],
  "description": "LITESKIN (Living It Through Every Situation Known In Nature) rallies the people with this track, as he asks everybody to join in unison to, \"Take A Stand\".  Listen as he speaks to his own and makes it very clear that we need to all start seeing each other as one, and not divided as we have been.  ",
  "timeSince": "4 hours ago",
  "directTipCount": 0,
  "directPlayCount": 1,
  "releaseDate": "2018-05-02T13:40:32.196Z",
  "tx": "0xa62867cd6d0d02f86d6efb6d0e54593a745e362e41f87cb6a95e1ce3a81f0c90"
},
{
  "resourceUrl": "eipfs://QmSCGurAg4utmTxSbp615LEZBUyArfppUJ6pM9XzrH56qb",
  "contentType": "audio/mp3",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Conversation",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0xdf8b38c7529283de24170d744f0b16073d503e2b",
  "artistName": "Camille Chardon",
  "totalEarned": "0",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "0",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmRsPLxCAgDZLfujibUF8EwYY9uZVU9vRq73rpAotiAsdf",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmUGgjofdv1cr3UU34YaShC8zT7Ecv5g9vLFDc1Qi9N6qu",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0xdf8b38c7529283de24170d744f0b16073d503e2b",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "0",
  "address": "0x8fb90e74c6facda495397806469636183071444d",
  "image": "/media/cf39288d92d8e76f50b339bbdc052af8d261f90a7d3140f24e67b1e7b08d51a5665032028fb9347439520935bb4d",
  "audioUrl": "/ppp/38fb0503fa3f9e47e4d549fc9c24f5baa7c36aabb882b91dca16dd8a4bc5b8ac89c086e2aeb899cb84268fb5f66894c3bdb9f656c427e038",
  "genres": [
    "Rien de spécial"
  ],
  "languages": [],
  "moods": [],
  "regions": [],
  "description": "",
  "timeSince": "4 hours ago",
  "directTipCount": 0,
  "directPlayCount": 0,
  "releaseDate": "2018-05-02T13:34:12.063Z",
  "tx": "0x3a1576ba576d81933a04fee7f74edf5f7ae9022cb31099c8d01d8d70a0dba004"
},
{
  "resourceUrl": "eipfs://QmYdyJFeiPZVJf82YP2Se78pJexjKviNyUcxAtM9gWDJdJ",
  "contentType": "audio/mp3",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Amon",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0xfbd6304d4e16a473c692f27a05a889a0a71b9f77",
  "artistName": "0kult",
  "totalEarned": "0",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "0",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmPSCTUeHBPdHKFU7nsan2EkW4A7FNrR9oVWGUAAe346kP",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://Qmd6WUPW3ko49rxRFwY5m1RVcw3t8inMGoC2izqQGFFVk6",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0xfbd6304d4e16a473c692f27a05a889a0a71b9f77",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "0",
  "address": "0xafadfe133b17eae9a928ba81b96bfe156c638385",
  "image": "/media/cf392aad81c0ca4959962d85d82819c78c6ddf2d2b4672c0406a858aa0961a810d4e5366ba9c345a28087c70b47b",
  "audioUrl": "/ppp/38fb5c03f962c847e2d219a8cb72f3bfa3ce32a7b983ec44c2118b854491edff89cd83b1afba95cc88778fb5f66894c3bdb9f656c526e83e",
  "genres": [
    "Trap",
    "Chill",
    "Ambient",
    "Hip-hop & Rap"
  ],
  "languages": [],
  "moods": [],
  "regions": [
    "Lyon"
  ],
  "description": "this is a trap ambiant track with a japanese scale ",
  "timeSince": "5 hours ago",
  "directTipCount": 0,
  "directPlayCount": 0,
  "releaseDate": "2018-05-02T13:10:50.964Z",
  "tx": "0x9b4b23e7db68019a79a006b03cef9a3b9bee569aadc3cdcf23f3d29d78d793d5"
},
{
  "resourceUrl": "eipfs://QmUMcirkQr2XjPujdDG3pvmnahXCgtN8vHZSEtWApPsHfn",
  "contentType": "audio/mpeg",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Rend",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0x219a9f6013639a0899050782f42c266a4697353c",
  "artistName": "MVYKE",
  "totalEarned": "2000000000000000000",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "2",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmTxeqAVpUUJZgRzsCn2eKWSWZR6aa4mqs5k4mRaukwG7C",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmWWSia4tCokNuZZNuaAGzTspwCKz6gurtcM9B2k8GRZiL",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0x219a9f6013639a0899050782f42c266a4697353c",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "2",
  "address": "0x82caf3f79233b48b47a8bc34d9a7eaa5d8bd2f0a",
  "image": "/media/cf392e86a7e5de7a618128abca040de8c840c27e203f60f84004968b87b95cbe4552305ac9a4277a38503f01e868",
  "audioUrl": "/ppp/38fb0557fb67c811b5d613f8c976f4eafe9567a9ea83ec46c9148d8513c4eefbd9cdd1eafbed9f9980238fb5f66894c3bdb9f656c424e138",
  "genres": [
    "Electronic",
    "Experimental",
    "Glitch"
  ],
  "languages": [],
  "moods": [],
  "regions": [
    "Manchester"
  ],
  "description": "'Rend' written by MVYKE\r\nlabel: post@queasylimbo.com",
  "timeSince": "5 hours ago",
  "directTipCount": 0,
  "directPlayCount": 2,
  "releaseDate": "2018-05-02T12:48:55.247Z",
  "tx": "0x75cf1770048c7f3209d61f8655c7b6528a3a59846aa6ade24b258946c5ae3fc6"
},
{
  "resourceUrl": "eipfs://QmQWr9nxQ5syTxvWULsJKTjFCdfCDUuXzUaxo9AGPvAwDX",
  "contentType": "audio/mp3",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "M.I.A - Chill Hop Vibes ",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0x2d36629b6758e5de7ab3854c0ea8fe9c1d3e8f0f",
  "artistName": "CJ Sound",
  "totalEarned": "3000000000000000000",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "3",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmW6HaDgmjvx1wvw2btsBqhugd6EfDYkGQYPZiBQmjmMoX",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmUpybjRYGsU7XRRBKWuVwLs5LfqwNS5eB7oaXtknGyag9",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0x2d36629b6758e5de7ab3854c0ea8fe9c1d3e8f0f",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "3",
  "address": "0x5f523d4b516862767b527aa90fdadaa98ad8584c",
  "image": "/media/cf392dc88af5db4b7cbe0b99a11429e58961d83f07055fde703af2f8809c31b873705c61a7a0374a2051250bb073",
  "audioUrl": "/ppp/38fb0803ad349d46e7831ffbcc7da0ecf1c164fcbe89b9449b19d9da1692effbd9c18db3fdb198c784218fb5f66894c3bdb9f656c420e33c",
  "genres": [
    "Hip-hop & Rap",
    "Ambient",
    "Pop",
    "Beats & Instrumentals",
    "Meditation"
  ],
  "languages": [],
  "moods": [],
  "regions": [
    "Mars"
  ],
  "description": "Hey guys\r\nFound these vocals in a sample pack I bought a while back and threw them into the mix. It flows really nicely and fits into the vibe of the track.\r\nThanks for listening\r\nCJ Sound",
  "timeSince": "7 hours ago",
  "directTipCount": 0,
  "directPlayCount": 3,
  "releaseDate": "2018-05-02T11:08:39.116Z",
  "tx": "0xbc902bf954a9bb5148b1bc157ba81a9289c1d58d8a4845c58473cb09535d44cf"
},
{
  "resourceUrl": "eipfs://QmWf7vCbsYHvPdxt85jwCjX4VcWziYaBdvzcc3tLxVkXpQ",
  "contentType": "audio/mp3",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Bedouin Camp",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0xe988dc7221069e108f4c24fb792dd80687f3dcf5",
  "artistName": "Graham West",
  "totalEarned": "1000000000000000000",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "1",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmfMxRFuZne7e3gEsD1T8iigCNzp9npAAees6e8YhBXW3b",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmdLNEjSCw6vJ1n2WQYYakbz1TtgLpD1itZM4isHnFkqWA",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0xe988dc7221069e108f4c24fb792dd80687f3dcf5",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "1",
  "address": "0x0871d9fef98667f152024a61789e96f74b46607e",
  "image": "/media/cf391cb3bac6d9594bba18d6f55038d7c8479d187d1d5ecc5410becddfb6189275446042cbac4d4225791011ec49",
  "audioUrl": "/ppp/38fb0d5daf37ca1bb5844cf3c273a0e9a0c666acbb89ba44cc11de844b96b2acdecf81b0adbf9bcf87278fb5f66894c3bdb9f656c420e43e",
  "genres": [
    "Electronic",
    "Experimental"
  ],
  "languages": [],
  "moods": [],
  "regions": [
    "England"
  ],
  "description": "",
  "timeSince": "7 hours ago",
  "directTipCount": 0,
  "directPlayCount": 1,
  "releaseDate": "2018-05-02T10:30:14.217Z",
  "tx": "0xeb712aa9feb735ce796322cf3923d07056b2e9d2a1d8bd365ed5ca6fac286857"
},
{
  "resourceUrl": "eipfs://QmNnf9HrmUbWKGfxDEXUho6uTBaJVKvVX3KLtYNXxc9Rbm",
  "contentType": "audio/mpeg",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Sketchfunk",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0xd0dfee392cd3135b28a4d75bec23948ce9156457",
  "artistName": "Spidola",
  "totalEarned": "6000000000000000000",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "6",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmPThSLJwVTPgFjgM8QQ8dK9H4fqtC4H6AADAUGx3feVEy",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmP2d8b4SmFiQTCTySRRhmMQkMeZX8YgAmQnqToUQfhZ5k",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0xd0dfee392cd3135b28a4d75bec23948ce9156457",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "6",
  "address": "0xf2265ed6a81a6bc6ac0e540364984a2ab10ade5b",
  "image": "/media/cf392aaaaac7d366668229b1f72535f5f63bfd1d7d107c925f6aa2cc929b5c9b02604475bc9c32637e5d2d109a52",
  "audioUrl": "/ppp/38fb5b57aa309b47b7d74bf2cb24a0bca5c132fdbbdebb11ca13df884bcbbffb8a99d7e3a9e8c99a85208fb5f66894c3bdb9f656c424e139",
  "genres": [
    "Piano",
    "Jazz & Blues",
    "Soundtrack"
  ],
  "languages": [
    "acoustic",
    "bass",
    "beat",
    "sax",
    "dance",
    "drums",
    "energy",
    "fun",
    "funk",
    "funky",
    "groove",
    "jazz",
    "piano",
    "positive",
    "vintage"
  ],
  "moods": [],
  "regions": [],
  "description": "This is a groovy dynamic funky track a positive mood, with a short piano solo in style of funk. Featured instruments: bass, acoustic piano, drums, and saxs.",
  "timeSince": "7 hours ago",
  "directTipCount": 0,
  "directPlayCount": 6,
  "releaseDate": "2018-05-02T10:28:33.391Z",
  "tx": "0xb81c8abb4352f0de24d94f74cc043545488245c4a428b861a00ffe305f4b7566"
},
{
  "resourceUrl": "eipfs://QmWmg9W1ifGb6zfZgcCx3wA2bkbGXZb73JkWv5QnuXHDwU",
  "contentType": "audio/mpeg",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Crime",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0x3dee25c182abdc881913b0513c41465a48df14d9",
  "artistName": "PISH",
  "totalEarned": "1000000000000000000",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "1",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmUX2KAFscL1GT3E6dPTFBMJem5C3b7BJSn5fUVjLfP86K",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmfX7LM6FeS5Cwo7goQJFxtGg2omg8hW6jC9JjbKXVe5ue",
  "tipCount": "0",
  "balance": "1",
  "contributors": [
    {
      "address": "0x3dee25c182abdc881913b0513c41465a48df14d9",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "1",
  "address": "0x8321c2a4a067122b0a73a3e51be1b01f2e12efc6",
  "image": "/media/cf392fa6f0dfde6a62b731d0d7376cd78d67fc1803367ae17233f1fed5ba5f917e726b049b9c2371015d187ee960",
  "audioUrl": "/ppp/38fb0556aa37cd10b2d54bfacc72a7ecf49563ffbc88ef169f15d8de17c2e9aa899e87b7a8bbc899d3748fb5f66894c3bdb9f656c423e23a",
  "genres": [
    "Pop Rock Indie"
  ],
  "languages": [],
  "moods": [],
  "regions": [
    "Bergen Norway"
  ],
  "description": "Pish Crime",
  "timeSince": "8 hours ago",
  "directTipCount": 1,
  "directPlayCount": 1,
  "releaseDate": "2018-05-02T09:52:19.168Z",
  "tx": "0x7864a007184e334bb9c8dc087363bf50235864af2b9d4a256712077e9a50dd3f"
},
{
  "resourceUrl": "eipfs://QmefAgzgRbaSyjMYVg1gUMeaoxXpEHz4yN1FXHcmvyneYQ",
  "contentType": "audio/mp3",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "RESTLESS",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0xe8a9aa9091f55575065c221b64726d8f16609886",
  "artistName": "KAKKMADDAFAKKA",
  "totalEarned": "2000000000000000000",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "2",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmXg4VYwLBv1C6cfDJjm3p42xg6UwEbQVR949NeNd8LmTL",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmPgwbYUBjka7dGzftubuPh7Eu9k5bhSmUbkJ7XYcWUt7u",
  "tipCount": "0",
  "balance": "10",
  "contributors": [
    {
      "address": "0xe8a9aa9091f55575065c221b64726d8f16609886",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "2",
  "address": "0x6e95950cea6eadb3c752130d446fc21b5c6a7bc7",
  "image": "/media/cf392299f6c2c65b5d960bd0d3553cf4ff49c621760403996f39f2e8919d0a8262733c05c48710552903042b8b67",
  "audioUrl": "/ppp/38fb0b00a1339717e3824fabcc20f7baa4c430a9be89bf16ca44dd884495e8a8899a80b1afe89a9dd3758fb5f66894c3bdb9f656c420e23a",
  "genres": [
    "Indie",
    "POP"
  ],
  "languages": [],
  "moods": [],
  "regions": [
    "BERGEN"
  ],
  "description": "SONG 1 . FROM THE ALBUM HEST 2011 BERGEN MAFIA RECORDS",
  "timeSince": "8 hours ago",
  "directTipCount": 10,
  "directPlayCount": 2,
  "releaseDate": "2018-05-02T09:19:59.285Z",
  "tx": "0x72a14c4e1f611614ddaabb3d3cc41af10faffd4f36c296a6654009850869d100"
},
{
  "resourceUrl": "eipfs://QmeEN16j22W3d8yiLPPgQPYBdfyvRNbssiuE6rXW2X2ja9",
  "contentType": "audio/mp3",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Love Cry",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0xf543acc6839cc58b9516abe61919d5814db2b103",
  "artistName": "Serafina 4",
  "totalEarned": "0",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "0",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmarQqsxvDqEFdPdPGacBUZpMY3ohe1zZ6MFUX3DY5ascn",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmfFKf55cMQK9WveCwhW7xovZ1sKdrBEngiNmwCX6cxVwj",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0xf543acc6839cc58b9516abe61919d5814db2b103",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "0",
  "address": "0x6371435eb4a5c6195572c0b47028ba0e3e67327c",
  "image": "/media/cf391b8c93e5ec5467900ca4d6070ff6eb44cd2f07216ddb5a07f7d28ebd59a96e174877a891465f140e2935bc45",
  "audioUrl": "/ppp/38fb0b56af379a11e68448fe9b70f5e8f7ce66abbc89ed159814de8c40cbe9fb889d86b7afbe9ecd87218fb5f66894c3bdb9f656c421e73d",
  "genres": [
    "Ambient",
    "Electronic",
    "chilled",
    "vibey"
  ],
  "languages": [
    "love",
    "relax",
    "chilled",
    "dreaming",
    "longing"
  ],
  "moods": [],
  "regions": [
    "Brighton"
  ],
  "description": "This is a longing and lingering tune, with Dave Brubeck kind of cymbals and haunting voices. I love it.",
  "timeSince": "8 hours ago",
  "directTipCount": 0,
  "directPlayCount": 0,
  "releaseDate": "2018-05-02T09:17:12.600Z",
  "tx": "0xd0ce9653af96cc3fcaa2d17d120becfd856441e037450be5c0375f6f48257c1b"
},
{
  "resourceUrl": "eipfs://QmeYkNNCoVoLEAV9hzhTS9o3KzUbvwcsgJYYJfb65oxw29",
  "contentType": "audio/mp3",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "Homage",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0x154eabe384c2f25b69a2faaa470e9fe55461706e",
  "artistName": "Downward Spiral Mantra",
  "totalEarned": "2000000000000000000",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "2",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmWVpp4pVnBr9bYYXxYBA9Zr2vPwEWnuhjevGbz6pxTCJv",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmYkWJsnVNa1etdVmqbggvMooiezqCYsydLKV8czHf5EJi",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0x154eabe384c2f25b69a2faaa470e9fe55461706e",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "2",
  "address": "0x56c3041f2e9d88d76591f6dab36ee5bff36b9831",
  "image": "/media/cf392da8b2e4ab5c47ba3f93a90106cbe37bf50e044d6dd9252894caa38f06a65c4b6047baab0f2d3d431c05955d",
  "audioUrl": "/ppp/38fb0853fb359e16e28718afc321aee6a2c065abb28ae8139e418b8f4496eeafda9ed3e1afeb94c783738fb5f66894c3bdb9f656c427e039",
  "genres": [
    "Electronic",
    "Electro",
    "Techno",
    "Tech-House"
  ],
  "languages": [],
  "moods": [],
  "regions": [
    "Madrid",
    "Spain"
  ],
  "description": " This is the 9th track in our album 'Adaptation '2018'",
  "timeSince": "9 hours ago",
  "directTipCount": 0,
  "directPlayCount": 2,
  "releaseDate": "2018-05-02T08:34:39.639Z",
  "tx": "0x1c26806e964fd4bdaaa6030d0dbeb4c143ef78ded0fca75d4db1680dd62ad337"
},
{
  "resourceUrl": "eipfs://QmR4uBJ2uPyWXunDkY3MZNGhvwrExcriH8kRaAWWxX2JbL",
  "contentType": "audio/mpeg",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "KNOW ME",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0x30d8ccdecb64afad4971ca76fc5badb346c681a1",
  "artistName": "WILD NATURE",
  "totalEarned": "2000000000000000000",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "2",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmdMeVMBKvWVaH8nDGR62YFHcH97ThQ5F7StGzRw1dTrwa",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmSjHppRrhsUAyT8WZhL8oLChe6r4K7imeTURd43STitqK",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0x30d8ccdecb64afad4971ca76fc5badb346c681a1",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "2",
  "address": "0x8ee7281e40bdf8e46caefc8f176256af72925951",
  "image": "/media/cf391eb3a7c2d26e5aa22ab7f12b67fcff44fe7a772d71e37416fd8ab2b039e672165645bab3276c7c5f1c34a84a",
  "audioUrl": "/ppp/38fb0500fd319c1ae2841efa9821f0e6a3c365fdeadee846c246d88b44c1beacd99e82e0a0bb98c685738fb5f66894c3bdb9f656c421e132",
  "genres": [
    "RAP"
  ],
  "languages": [],
  "moods": [],
  "regions": [],
  "description": "SONG 12 WILD NATURE VOL.1",
  "timeSince": "9 hours ago",
  "directTipCount": 0,
  "directPlayCount": 2,
  "releaseDate": "2018-05-02T08:26:33.149Z",
  "tx": "0xed3648beda87707f71f903140d59c54fd1a31aa27f73be457d3f7bc736426087"
},
{
  "resourceUrl": "eipfs://QmUUYMzcSAonLWudAgQyE3Ys8okTUyTCUVb7baiihgk5RV",
  "contentType": "audio/mpeg",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "ART STAR",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0x30d8ccdecb64afad4971ca76fc5badb346c681a1",
  "artistName": "WILD NATURE",
  "totalEarned": "0",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "0",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmdMeVMBKvWVaH8nDGR62YFHcH97ThQ5F7StGzRw1dTrwa",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmSjHppRrhsUAyT8WZhL8oLChe6r4K7imeTURd43STitqK",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0x30d8ccdecb64afad4971ca76fc5badb346c681a1",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "0",
  "address": "0x5242819ad75d8de1cface97bcfe3d2b20e5d5117",
  "image": "/media/cf391eb3a7c2d26e5aa22ab7f12b67fcff44fe7a772d71e37416fd8ab2b039e672165645bab3276c7c5f1c34a84a",
  "audioUrl": "/ppp/38fb0857ac349613ea804efdcf21aebaa3c630f8ead8eb1ccd428ada17c0efa8daca85b7aced98ce81758fb5f66894c3bdb9f656c421e73e",
  "genres": [
    "RAP"
  ],
  "languages": [],
  "moods": [],
  "regions": [],
  "description": "SONG 11 WILD NATURE VOL.1",
  "timeSince": "9 hours ago",
  "directTipCount": 0,
  "directPlayCount": 0,
  "releaseDate": "2018-05-02T08:24:35.038Z",
  "tx": "0xb319999514757a048dd2a11fe699c6d354719d7f5ee9317cda5529461cc157e2"
},
{
  "resourceUrl": "eipfs://QmQbvfZ3rYP15ya2SvQkALStMx7Ny5sNvNxshzCtjUNpNM",
  "contentType": "audio/mpeg",
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "totalShares": "1",
  "totalPending": "0",
  "title": "SUGGER",
  "getContributorsLength": "1",
  "licenseVersion": "1",
  "metadataVersion": "0",
  "artistProfileAddress": "0x30d8ccdecb64afad4971ca76fc5badb346c681a1",
  "artistName": "WILD NATURE",
  "totalEarned": "0",
  "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
  "playCount": "0",
  "contractVersion": "v0.7",
  "imageUrl": "ipfs://QmdMeVMBKvWVaH8nDGR62YFHcH97ThQ5F7StGzRw1dTrwa",
  "weiPerPlay": "1000000000000000000",
  "totalTipped": "0",
  "metadataUrl": "ipfs://QmSjHppRrhsUAyT8WZhL8oLChe6r4K7imeTURd43STitqK",
  "tipCount": "0",
  "balance": "0",
  "contributors": [
    {
      "address": "0x30d8ccdecb64afad4971ca76fc5badb346c681a1",
      "shares": "1"
    }
  ],
  "royalties": [],
  "coinsPerPlay": "1",
  "totalEarnedCoins": "0",
  "address": "0x946bd26dfda7289579acfdf958aadff4137bbf04",
  "image": "/media/cf391eb3a7c2d26e5aa22ab7f12b67fcff44fe7a772d71e37416fd8ab2b039e672165645bab3276c7c5f1c34a84a",
  "audioUrl": "/ppp/38fb0451ae64ca10e5854cae9b72a4e6ffc264a7ead8e8419c19dc841392effcdecc84e1aeebcf9980768fb5f66894c3bdb9f656c421e132",
  "genres": [
    "RAP"
  ],
  "languages": [],
  "moods": [],
  "regions": [],
  "description": "SONG 10 WILD NATURE VOL.1",
  "timeSince": "9 hours ago",
  "directTipCount": 0,
  "directPlayCount": 0,
  "releaseDate": "2018-05-02T08:23:26.592Z",
  "tx": "0x493bca78c05c67491b922872865ccf6fea2d2a826780d1192cd1cb7666c9fc9d"
}
]
					`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="https://musicoin.org/json-api/tracks/recent">
				<pre>
					<code>
						{`
[
  {
    "resourceUrl": "eipfs://QmdvESvkzQrdTXH59obyEf1hL1f7ChwiJRiF8A4cdfc8Dm",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Do You Feel? [Solar Mix]",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x1a1e1e808b6aa40086e3564ba3593d6aae8d55a8",
    "artistName": "DizzAstral",
    "totalEarned": "13000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "13",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmPqRGQGBBzHkd61aQGgpWYzGTKE4YFXhMwT4NJR8SAjzg",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmRE64Hxt1TS9kYb7DXHedNzjivhdky8Sx96keaS21rJ6X",
    "tipCount": "0",
    "balance": "2",
    "contributors": [
      {
        "address": "0x1a1e1e808b6aa40086e3564ba3593d6aae8d55a8",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "13",
    "address": "0xc7f2642130256339557412b38c5472a2ee706bad",
    "image": "/media/cf392a8f90d3ce6b539607a9fb0769a3da52eb2b35236ed1500a8ff8d2812e8b5c6c7265c9873f497568092ca54c",
    "audioUrl": "/ppp/38fb5e52fe349816e1d019fac870a0edf5ce66abbc8fbf179813d1df47c7bca8d9cad0b7aeb99b9dd1268fb5f66894c3bdb9f651c42de73a",
    "genres": [
      "Electronic"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "timeSince": "1 year ago",
    "directTipCount": 9,
    "directPlayCount": 13,
    "releaseDate": "2017-04-01T19:37:08.809Z",
    "tx": "0x66f4870db610fb7c54bcd01c048d1eeecbad6ef870d5b169e06230982979938a"
  },
  {
    "resourceUrl": "eipfs://Qmf4jRpnGBRaUZa5GgeueAe7573nkLeZ7bvqfMCoGubVWV",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "The Chill Pump",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x11e6cecc7ec9e0a4e71d25f77630deb3859c11cb",
    "artistName": "COtu",
    "totalEarned": "15000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "15",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmSyutp8wpQuKkqNanYhH1UVHPnRxQSTsrfXGXM8t5kbr3",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmRp31HpBq4xhQUT5j5Knt46NmQWYZPZNejtsGNyySiYmb",
    "tipCount": "0",
    "balance": "8",
    "contributors": [
      {
        "address": "0x11e6cecc7ec9e0a4e71d25f77630deb3859c11cb",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "15",
    "address": "0x36f280406319394574a68566349bc9c2aeb1db67",
    "image": "/media/cf392987b7e0ef1466a42c94db082edcda6df5240d4562fd5f0eaaef9e893b8747536369ba913823390e2324ad18",
    "audioUrl": "/ppp/38fb0e53fe349612e7d11cf9cb7ca5e7f2c264aaea8db610cc16da884b91e8a3dbcad4b7fbb8c99d86758fb5f66894c3bdb9f651c423e439",
    "genres": [
      "Electronic",
      "Dance",
      "Pop",
      "Trance",
      "Soundtrack",
      "Trip-Hop"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "description": "fat fat bass.love some bass sounds i hear in futurefunk and vaporwave i also dig the slightly distorted toppy drum grooves of old trip-hop. the melody came easily (for some reason) Thanks for listening.  ",
    "timeSince": "1 year ago",
    "directTipCount": 8,
    "directPlayCount": 15,
    "releaseDate": "2017-04-06T06:50:56.148Z",
    "tx": "0x9bddc6ad11a31a55d7d3c42cdb8dba1393ad218cd72de650eba2e418b21c7a8b"
  },
  {
    "resourceUrl": "eipfs://QmPRNig1FZeRLJXiMjGWZi5GdQcFL5L6MVFDn4PWAeKkUR",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "After the storm",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x0913eb95aca132539c625ac40732a22e15d949ed",
    "artistName": "Diego Pau",
    "totalEarned": "47000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "47",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmPzm1s1WroSYUVjkJj7bagXZwdoyjsBrJYaes8xtqdsTu",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmRNVqB3dgZXRRuKsBLEfpiY9qUngyftwkUDcoRo9j1BUX",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x0913eb95aca132539c625ac40732a22e15d949ed",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "47",
    "address": "0xb6918b6116c7c14fe9f83e54de61d56d397f08b4",
    "image": "/media/cf392a84afa5ec1d46a612b2c93609f8d049c67b271550f34d29a0d29fb21b91466b5c5098ba4d63394a2c358b5e",
    "audioUrl": "/ppp/38fb5f53a1379640e5d01bfc9972f5eff29136a7ed83bd40cf148dd944c2efaf8e9c86ebaeef9dc7d2768fb5f66894c3bdb9f651c523e63e",
    "genres": [
      "Piano"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "description": "My first and only piano composition",
    "timeSince": "1 year ago",
    "directTipCount": 2,
    "directPlayCount": 47,
    "releaseDate": "2017-04-06T17:39:46.683Z",
    "tx": "0xc8b90cf51063c690d97567fc6712dc3ff7273910cf28a3cfb7e533248f892ae2"
  },
  {
    "resourceUrl": "eipfs://QmctbNYfy2ZPVBUyFa6rVRcGugePjMnKbzDKZSae8Gbhu3",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Ostavljam te Cult Band",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x828f40a281212bb5a078e39ab29aa3db62d0dd09",
    "artistName": "Cult Band Austria",
    "totalEarned": "21000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "21",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmU2Sf2WsWPZnsYu7bPndUyN4ePdafAZcXNFWwTei83Nrq",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmewV1EFuJTxLuemjE93cQbMt9cMKiuCDpd9kvfBfujibx",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x828f40a281212bb5a078e39ab29aa3db62d0dd09",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "21",
    "address": "0xfc90a387f132851b8f896dd1d410b5ef9e8bb3b4",
    "image": "/media/cf392fcc91f2ad7b62832dbbfe1006e78c61fc2221214ee5233b94d987be298957794b77aabe217e24037b08ad5a",
    "audioUrl": "/ppp/38fb5b06a136cf11ebd64cfbc977aeebf7956bf8b382b8419e118d8843c3e9afdd9e8cb7a1ebcfccd2768fb5f66894c3bdb9f651c42de339",
    "genres": [
      "Rock - Pop   YU-style"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "description": "",
    "timeSince": "1 year ago",
    "directTipCount": 42,
    "directPlayCount": 21,
    "releaseDate": "2017-04-05T13:45:09.035Z",
    "tx": "0x4fa30693c9f5f2de56b61b3e035c29823562279cd58adb3602b07f827476066a"
  },
  {
    "resourceUrl": "eipfs://QmStHL6mX11ArtfT5bpHR3pWzWuKjL7E8AG5KKPeVLQqPc",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Sequence",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0xa04cba00991911a96da478c5b13f78c561990bcb",
    "artistName": "The DROiDS",
    "totalEarned": "178000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "178",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmdMrxNCueXUV5xVtLuzhdFB5wYRTyE4sH3jwLWUtN3ZVF",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmZAWDxP2fw4uaHYJ1E7MvATVZ26KCqzxVQgTWXuuSm4dG",
    "tipCount": "0",
    "balance": "34",
    "contributors": [
      {
        "address": "0xa04cba00991911a96da478c5b13f78c561990bcb",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "178",
    "address": "0x219c323edad1532b945ef9cab7bb9ea2a2e7dd82",
    "image": "/media/cf391eb3b0ecd16f64b125b4c65627c4cf4fd9362d1071e922299defb2a12de74769365b8a85224e39757b1c896d",
    "audioUrl": "/ppp/38fb0f54a1659d10e0844eab9e74a3edf4956aaabedee81c99418b8b1091b2ffd9cad4e0fcbec99b88708fb5f66894c3bdb9f651c420e239",
    "genres": [
      "Alternative Rock",
      "Electronic",
      "Indie"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "timeSince": "1 year ago",
    "directTipCount": 34,
    "directPlayCount": 177,
    "releaseDate": "2017-03-05T19:47:51.789Z",
    "tx": "0x9e1707dcd69c3d64998ef5698d3daf0127bbb3df572edb898f22e96ce6217a7d"
  },
  {
    "resourceUrl": "eipfs://QmTP76xXB8qti9Wq8CRk9A7k13KiaaxjUnVwKjEGqXtri3",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Dreamer",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x0f8df2e0f5d302407e56e17b81051f03dc4767d4",
    "artistName": "Amaray",
    "totalEarned": "1.559e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "1559",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmQknQ8tLYXgbf65MRB7bWooZZzwJxKaGMg9Qxwo5gyCiJ",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmNekPMaQPNivoHAGNDbqe9Pkah6JLLjHYQ1W5KSw5GeBv",
    "tipCount": "0",
    "balance": "1",
    "contributors": [
      {
        "address": "0x0f8df2e0f5d302407e56e17b81051f03dc4767d4",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "1559",
    "address": "0x83ff47d477f82dc6225ac1ed36b94799bd8550c9",
    "image": "/media/cf392b95acc5a7585d8d2586f20569a7f651ee7b272358c44d04becaaca023b2736c6208acb10274785c3105b661",
    "audioUrl": "/ppp/38fb0556fe609a15b7d51dfd9c7da4baa5c161acbedaed149f44da8a10cabfad81c1d7b6a1bc98cfd37b8fb5f66894c3bdb9f651c42de73a",
    "genres": [
      "R&B & Soul",
      "Gospel"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "timeSince": "1 year ago",
    "directTipCount": 407,
    "directPlayCount": 1559,
    "releaseDate": "2017-04-03T01:02:19.947Z",
    "tx": "0x31b76da88af1c61d88cbf816a5820101ad3738f1ccb4b50c3dc50bf93445451c"
  },
  {
    "resourceUrl": "eipfs://QmcAzSmjK3XmyNQ7a7Ka7LrEfuyR3HQEuhXBFgGpL6No3k",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "St Hermans Ascent",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x11e6cecc7ec9e0a4e71d25f77630deb3859c11cb",
    "artistName": "COtu",
    "totalEarned": "9000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "9",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmVLyKEjt4ZxdrfvnfCy7Qho1S7bdZg4M9deXSQhY3zqde",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmRp31HpBq4xhQUT5j5Knt46NmQWYZPZNejtsGNyySiYmb",
    "tipCount": "0",
    "balance": "2",
    "contributors": [
      {
        "address": "0x11e6cecc7ec9e0a4e71d25f77630deb3859c11cb",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "9",
    "address": "0xc6673a9c0578578a048447baa79980286905908c",
    "image": "/media/cf392cb2bbdfda4665e02799f41139e4d565ef3572255fc4260df3df82820fe779186154a59a247314083237bb4e",
    "audioUrl": "/ppp/38fb5e53ae319d43ea821affcd7da3e9fe9663aab38fba129841888b4bcab3aa8ac083eba9bc94cf88218fb5f66894c3bdb9f651c423e73b",
    "genres": [
      "Electronic",
      "Dance",
      "Pop",
      "Trance",
      "Soundtrack",
      "Trip-Hop"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "description": "Down tempo chill track based on some lush diminished chords. Turned out kinda nice ... happy with this one. Enjoy! ",
    "timeSince": "1 year ago",
    "directTipCount": 2,
    "directPlayCount": 8,
    "releaseDate": "2017-04-06T06:12:16.647Z",
    "tx": "0x8c5f1667db5a3b7f3e4d3b91af3bbb73ffd6df262da2eb4474cdf0d3f3225b86"
  },
  {
    "resourceUrl": "eipfs://QmacVXg8iiMXfzczN5EUHXunJZP8hPSATatirwBcRfLuA6",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "ozu",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0xca5709b827c6593ae3bb2aace798202167e6d9a7",
    "artistName": "samocvetov",
    "totalEarned": "4000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "4",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmQTAh1kwntnDUxf8kL3xPyUzpRFmD3GVoCKA4D37FK77C",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmbVzDemiQfTfdLHraCVArGpvbaUJyjSF8D6uiBKiHxvUe",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0xca5709b827c6593ae3bb2aace798202167e6d9a7",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "4",
    "address": "0x63a8f64e3c4dc8d6c7645559a560c7f20d0e54bf",
    "image": "/media/cf392baa83fcae4766ba098fd43627f48368e07f3d244efe6d2e96fb8b9c5b94624e467abcfd31287a7d0371e868",
    "audioUrl": "/ppp/38fb0b56f93ec814e78419a9ce21f5e6a2c130a9bd8fbb10cf19888944c3e8addeca85b6a9ec98cbd2248fb5f66894c3bdb9f651c420e83e",
    "genres": [],
    "languages": [],
    "moods": [],
    "regions": [],
    "description": "",
    "timeSince": "1 year ago",
    "directTipCount": 0,
    "directPlayCount": 4,
    "releaseDate": "2017-04-07T00:32:47.992Z",
    "tx": "0xf3da20fb73caeef1da7b8f12c3ce3f7d601dacda18e25e3da0130a4ebc6fd95a",
    "markedAsAbuse": true
  },
  {
    "resourceUrl": "eipfs://QmTFukw1odWonNFZbeHxRbJsapAxRo2GLzx2HzPbFdDSfg",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Egos - Za Gorizont",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x97b77c5d443d8e266524f18a07a568d29240a0ba",
    "artistName": "Ivan K",
    "totalEarned": "11000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "11",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmQTAh1kwntnDUxf8kL3xPyUzpRFmD3GVoCKA4D37FK77C",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmakAYvj3UDW82THNA1vWry53vq12yVJS2o5kZEzLgBPST",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x97b77c5d443d8e266524f18a07a568d29240a0ba",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "11",
    "address": "0x80e47ae41db8ab6e98970402e876f82f8e85320c",
    "image": "/media/cf392baa83fcae4766ba098fd43627f48368e07f3d244efe6d2e96fb8b9c5b94624e467abcfd31287a7d0371e868",
    "audioUrl": "/ppp/38fb0555fd329943b6d51bae987df7bcf0926aa6b28cbe11ca128c8445c5eda28a9e8db7a1bc9ecd80218fb5f66894c3bdb9f651c423e63e",
    "genres": [
      "rock"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "description": "",
    "timeSince": "1 year ago",
    "directTipCount": 0,
    "directPlayCount": 11,
    "releaseDate": "2017-04-06T16:14:07.694Z",
    "tx": "0x64aacb5f0deeb6d60ee71c0199fa67b7c6cf7cea764990d6644baf14c08bc4ac"
  },
  {
    "resourceUrl": "eipfs://QmQfRJxRKPmaExgtxCRNsArTrrGmRn1gvRLLaz4Hu1Dm4E",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Flicker",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0xa04cba00991911a96da478c5b13f78c561990bcb",
    "artistName": "The DROiDS",
    "totalEarned": "862000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "862",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmdMrxNCueXUV5xVtLuzhdFB5wYRTyE4sH3jwLWUtN3ZVF",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmZAWDxP2fw4uaHYJ1E7MvATVZ26KCqzxVQgTWXuuSm4dG",
    "tipCount": "0",
    "balance": "298",
    "contributors": [
      {
        "address": "0xa04cba00991911a96da478c5b13f78c561990bcb",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "862",
    "address": "0x8734c4be1f2755664de41bc76dbffbaea6d9a82b",
    "image": "/media/cf391eb3b0ecd16f64b125b4c65627c4cf4fd9362d1071e922299defb2a12de74769365b8a85224e39757b1c896d",
    "audioUrl": "/ppp/38fb0552ab32cd16b1841bacc872a3ebf0c167faee8fbf479917dfd81095edf8d99dd4e4fdb0ccc782208fb5f66894c3bdb9f651c420e23c",
    "genres": [
      "Alternative Rock",
      "Electronic",
      "Indie"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "timeSince": "1 year ago",
    "directTipCount": 298,
    "directPlayCount": 861,
    "releaseDate": "2017-03-05T17:46:25.435Z",
    "tx": "0x994f2b944f695f3f798afe92d0ba724e336c274d3fa358dc1aad43c197136122"
  },
  {
    "resourceUrl": "eipfs://Qmb4mzbmA5qrnma1f2nEG35827xr2ydtMXSdJJet8o3oRb",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Sequence",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0xa04cba00991911a96da478c5b13f78c561990bcb",
    "artistName": "The DROiDS",
    "totalEarned": "42000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "42",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmdMrxNCueXUV5xVtLuzhdFB5wYRTyE4sH3jwLWUtN3ZVF",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmZAWDxP2fw4uaHYJ1E7MvATVZ26KCqzxVQgTWXuuSm4dG",
    "tipCount": "0",
    "balance": "2",
    "contributors": [
      {
        "address": "0xa04cba00991911a96da478c5b13f78c561990bcb",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "42",
    "address": "0x05bbccce4d38cb28f0206e90dcefb7cef70daa24",
    "image": "/media/cf391eb3b0ecd16f64b125b4c65627c4cf4fd9362d1071e922299defb2a12de74769365b8a85224e39757b1c896d",
    "audioUrl": "/ppp/38fb0d50fa64cd41b0841eaec97df5bcf4cf35aeb98bb840c3108ddf1795e9addb9dd3e5a9edcc9e82768fb5f66894c3bdb9f651c420e23c",
    "genres": [
      "Alternative Rock",
      "Electronic",
      "Indie"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "timeSince": "1 year ago",
    "directTipCount": 2,
    "directPlayCount": 42,
    "releaseDate": "2017-03-05T19:22:46.903Z",
    "tx": "0xd811a08524d83e9092e05bb2ccd9d92f6d6750aefa38aaea1d5f1dafebb4e58b"
  },
  {
    "resourceUrl": "eipfs://QmXqCU6vLgMzX1wjMYy41Vfn2Pjc59Znw4ZyHcBBLbBak4",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Resistencia",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0xc9248b22c6deee61898a6d7888dfd0eb02f2a78a",
    "artistName": "Jordana",
    "totalEarned": "66000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "66",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmaoTaGFGkzT6w6faLhZWWakyAT2VAgPr1FcLQ7Xaw9HDf",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmbgeMU1vUmuGGJJWBeo7GtvnX32om34Vuis4jLpG2Fh9P",
    "tipCount": "0",
    "balance": "119",
    "contributors": [
      {
        "address": "0xc9248b22c6deee61898a6d7888dfd0eb02f2a78a",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "66",
    "address": "0x33d09081286b3fbe4ffe19b06cbf990566255e4f",
    "image": "/media/cf391b9196f5d86a56bf07b5a61469f4da4fc416122356c06e1f908fb0990f8346104352b19842432c4c710e9b4d",
    "audioUrl": "/ppp/38fb0e56fc369712ebd018f2cc27a5b8a49267f8eddebf1c9810dfdf1095b2a388cd83e4abbc989a84248fb5f66894c3bdb9f651c423e93a",
    "genres": [
      "Drum & Bass"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "description": "The intro of this tune is in the FREE CeCe! documentary film produced by Laverne Cox (Orange is the New Black/Rocky Horror Picture Show) and Jacqueline Gares. After they heard an earlier untitled version of it posted to my Soundcloud I was asked to score the majority of the music heard in FREE CeCe!\n\nIt was an honor to be chosen to score music for such an important project examining one woman's struggle for justice in a system stacked against her.  See http://www.freececedocumentary.net for screening and more information.\n\nIf you like Drum & Bass/Neurofunk with a Rock/Metal edge this tune may be for you. The production, drum programming, keyboards/synths and guitar work are all me :) \n\nBTW: This is actually an instrumental version of the song. Like Rainbows Not Enough (It All Goes Dark) this tune will have sparse lyrics. I've just not gotten around to voicing them yet.\n\n\"Resistance is resilience and resilience is resistance.\"\n\"Must defy those who would deny our own existence.\"\n\n\"Resilience is resistance and resistance is resilience.\"\n\"Both take persistence and a little bit of brilliance.\"\n\n\"Strength is self-evident.\"",
    "timeSince": "1 year ago",
    "directTipCount": 152,
    "directPlayCount": 66,
    "releaseDate": "2017-04-06T15:12:35.455Z",
    "tx": "0x336b8ed955b042c727fbb262380ac8c42d719a1ea860da7ad30d2c1e0cb55093"
  },
  {
    "resourceUrl": "eipfs://QmRksrq95o8EhetXghzRvdzfPPQhc7YyiJ1nioupyD1iQE",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Woman Don't Cry ",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x0f8df2e0f5d302407e56e17b81051f03dc4767d4",
    "artistName": "Amaray ",
    "totalEarned": "2.217e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2217",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmQTAh1kwntnDUxf8kL3xPyUzpRFmD3GVoCKA4D37FK77C",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmaoNTrhz9hN86Nsb8R2qCJanfmn5HhQFBg2h6MQhe3bjD",
    "tipCount": "0",
    "balance": "16",
    "contributors": [
      {
        "address": "0x0f8df2e0f5d302407e56e17b81051f03dc4767d4",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2217",
    "address": "0x83730788de5b08c7c6993f9beca714f340216fcf",
    "image": "/media/cf392baa83fcae4766ba098fd43627f48368e07f3d244efe6d2e96fb8b9c5b94624e467abcfd31287a7d0371e868",
    "audioUrl": "/ppp/38fb0556af359e15ebd94eafcf27a6e6a5c030a8b282bd43c3428cdf13c4baaedecb81e2abb89b99d3248fb5f66894c3bdb9f651c423e538",
    "genres": [
      "R&B  raggae"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "timeSince": "1 year ago",
    "directTipCount": 138094,
    "directPlayCount": 2214,
    "releaseDate": "2017-02-17T22:53:09.497Z",
    "tx": "0xfba8576b0831268feba6b790dc799f6adade1e5f452ca7cdd85971c20a86512b"
  },
  {
    "resourceUrl": "eipfs://QmRkSmNi1fJswactkMhu5aAutEdy7McZnQSM6oqLSneg1h",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Concentration",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x11e6cecc7ec9e0a4e71d25f77630deb3859c11cb",
    "artistName": "COtu",
    "totalEarned": "4000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "4",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmSnZn348oiZEqpUgA5YYfF53agSsGGrr7HHTK3Zty4rtf",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmRp31HpBq4xhQUT5j5Knt46NmQWYZPZNejtsGNyySiYmb",
    "tipCount": "0",
    "balance": "1",
    "contributors": [
      {
        "address": "0x11e6cecc7ec9e0a4e71d25f77630deb3859c11cb",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "4",
    "address": "0x1e794f23bb4fc8c6e241b4e8a0476bf14c8ffc29",
    "image": "/media/cf39299098faac1829bb14bbd5122fc7dc4299151c12719e243fa3ee959f2fa146164d79a982464139427c34ab4d",
    "audioUrl": "/ppp/38fb0c00af3f9a44e1d248a8ce23f5e6a5c136acbf8aec119f18888c46c4bdf8dec981b1a1efcb9c827b8fb5f66894c3bdb9f651c420e33f",
    "genres": [
      "Electronic",
      "Dance",
      "Pop",
      "Trance",
      "Soundtrack",
      "Trip-Hop"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "description": "Concentration is Trance inspired track (130bpm) with orchestral elements and a fun counter melodic bass line... Enjoy.",
    "timeSince": "1 year ago",
    "directTipCount": 1,
    "directPlayCount": 4,
    "releaseDate": "2017-04-06T06:28:57.149Z",
    "tx": "0x37d34aa3edade0cf30219768ceb2b8d24d97a6dd90e876f12b18d0afab7537ef"
  },
  {
    "resourceUrl": "eipfs://QmaAH6jB1pqv1T2PumGYPN4HNY6or1U6JUo597BG2mqMUw",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "The Train",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0xda1f3307a8d6c517c44e3367ba9080d9fa8885a6",
    "artistName": "Elias James",
    "totalEarned": "151000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "151",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmYLHdxheNEp6uAry7Jf9Kscn5GtRZpESMw7RuGrJjiVST",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmVqg1QgcFmHE5Tm8FwQ1cnwq8dq3fZtVm5AaASUyu98mn",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0xda1f3307a8d6c517c44e3367ba9080d9fa8885a6",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "151",
    "address": "0xf05fe0037fdc9920b4d942edaa6d06fea260b89f",
    "image": "/media/cf3923b28af0e744749a3891a6161ee0c234e62a7c3f44c8796b83c9b4821896676c7206afbc3269075121108c7f",
    "audioUrl": "/ppp/38fb5b55ad60cb12e3d21dac9e26afe7f4c731aaef82ba179f4488dd4497bbacde9dd4e0afb9cfc789248fb5f66894c3bdb9f651c423e93a",
    "genres": [
      "Folk & Singer-Songwriter",
      "Country",
      "Rock"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "timeSince": "1 year ago",
    "directTipCount": 165,
    "directPlayCount": 150,
    "releaseDate": "2017-03-19T03:22:36.026Z",
    "tx": "0x016efb406c749bf47b2cb6ec42a6634668143f9947972204681d2fa0177a2aaf"
  },
  {
    "resourceUrl": "eipfs://QmQjpBqMBitpYNbWEvp4MQ2GNDABq96LLheEgi9GZTMBXE",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Break You",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0xfd914311f1f8e37778a6a35aa99d03b4a1e73e72",
    "artistName": "Nell",
    "totalEarned": "724000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "724",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmYX2s9naB1qSD2dzEyPoLXZwTQVhS2rMXfw6FehLwopAU",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://Qmc7UtfaPqSBb9YDZoWAjV2d3mzwaxFetQ3x2XmB6Pz8ve",
    "tipCount": "0",
    "balance": "161",
    "contributors": [
      {
        "address": "0xfd914311f1f8e37778a6a35aa99d03b4a1e73e72",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "724",
    "address": "0x6c9d91db0a1bbab80ddce5bf60d3d3449ea3f119",
    "image": "/media/cf3923a6f0e7a64270964c90c3276df6c146d51c2a386ff1600a95eb8e8b5aa179796346cb8f1073014c27369e7e",
    "audioUrl": "/ppp/38fb0b06a1629713b7831aabcb27f4bfa4cf63faefd8eb109846df8c16c0efa98ccc8cb7f8bacbce817b8fb5f66894c3bdb9f651c422e232",
    "genres": [
      "Alternative Rock",
      "Pop",
      "Rock"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "timeSince": "1 year ago",
    "directTipCount": 161,
    "directPlayCount": 724,
    "releaseDate": "2017-03-24T15:18:49.364Z",
    "tx": "0x570948b3683409a33e2590e5a360ed207b7891234841fc2d7914d96fffc8ec9f"
  },
  {
    "resourceUrl": "eipfs://QmW2EMqEQWiKFyECQE57Nqxi913KEqKNUoGCpyBVBZbs6Y",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Visions of William Blake ",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x979a8d8d82cb11acc86c5b488c7666f655476386",
    "artistName": "Jamieson Andrew Fletcher",
    "totalEarned": "49000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "49",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmVsK2MN7FZK3xgSaKkxU781MmKRVrz2zqTkzGWGpL6pai",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmRbGEh7whsNb1B7gbHaf8R3hqY6hbheqBsQy1u3qraRDN",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x979a8d8d82cb11acc86c5b488c7666f655476386",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "49",
    "address": "0x2d7fa31df943488827fc8abc034e4da2ee8ea520",
    "image": "/media/cf392c8d89a6d262269227aaa31b38c1da48c73410430f9a5a338fefb0aa12e14e50515a878e225c3d777e36be42",
    "audioUrl": "/ppp/38fb0f01af60cf11e2854cf3ce76a2e6fecf61a9edd8b6449843d98f4696bffed9cad0b7a1ecccca82728fb5f66894c3bdb9f651c424e339",
    "genres": [
      "Alternative Rock",
      "Ambient"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "timeSince": "1 year ago",
    "directTipCount": 31,
    "directPlayCount": 49,
    "releaseDate": "2017-03-23T03:39:53.981Z",
    "tx": "0x058f3f1dbc5edf37d3c07deb9dfaf7a40553d70c58b495821cbfd427bbc94c89"
  },
  {
    "resourceUrl": "eipfs://QmTesW8QnxHjdgXXvfbxnwUyXx35miWwJ1cz89bmUpEkgD",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Say Goodbye To Yesterday",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0xde552ad591c4d46fc8db7ce47df793d7b0eebe2a",
    "artistName": "Taylor Angus ",
    "totalEarned": "460000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "460",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmazNE8uHAoNxoPkPRtFRgRMAfa4CP7iZH9e7t8X2sLQGk",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmZkELuQy7tHtuSACBycs2o8appXyPohrdrqQqZ7BzYxxd",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0xde552ad591c4d46fc8db7ce47df793d7b0eebe2a",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "460",
    "address": "0xf3cceace7ed8b93618d4fc2c35326d1a5dd60bf5",
    "image": "/media/cf391b848cd1a759599512afe80c0ff9eb51d80a171365e65638a589a5885fba6e693c54cabd4d437f4804179840",
    "audioUrl": "/ppp/38fb5b56fb65cb43b0841daf9e7df4e7f5c162a6ef8fe846c843da8941c1bdfe899980b6fdbf9d9dd6778fb5f66894c3bdb9f651c423e93a",
    "genres": [
      "R&B & Soul",
      "Jazz & Blues",
      "Indie",
      "Folk & Singer-Songwriter"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "timeSince": "1 year ago",
    "directTipCount": 669,
    "directPlayCount": 460,
    "releaseDate": "2017-03-23T13:02:12.798Z",
    "tx": "0x6865e08d995b02017856b7b72a91744cfe19782fd9fdf063d290bb986ee793ad"
  },
  {
    "resourceUrl": "eipfs://QmRtbRdifemyKpxaNtMBdjNHYa3mLDLGYmqKdwjKDYa5Q5",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Валерий Полусмак - Невидеть легче, чем любить.",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0xd20b38ae7e717d07072edbb667ce190f5fc19206",
    "artistName": "smak77",
    "totalEarned": "39000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "39",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://Qme5YPz4RpKgbhHaMuQ6hXbEmKDYBTyRyBrK9KK9mUpsnm",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmbvqThjrtfMRbcPT9nzkWC5TkET8fNhrkXqWk4k3QH2Jx",
    "tipCount": "0",
    "balance": "5",
    "contributors": [
      {
        "address": "0xd20b38ae7e717d07072edbb667ce190f5fc19206",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "39",
    "address": "0x3ce25f3511c293498a2345902f4edb5f3f882f0b",
    "image": "/media/cf391fcb9bc4e51843a43686f20b17f3f676fd7a2d2c55ee7a1580e4a48c11814d63777ac4823e22206e3835b146",
    "audioUrl": "/ppp/38fb0e06fd349b44e0d41bfb9977afedf2ce6bffb988ba10c310dbda4696eff88d9e86b4a1b19f9980208fb5f66894c3bdb9f651c42de73e",
    "genres": [
      "Deep House",
      "Hip-hop & Rap",
      "etc."
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "description": "Валерий Полусмак - Невидеть легче, чем любить. Крым - Коктебель 2015",
    "timeSince": "1 year ago",
    "directTipCount": 8,
    "directPlayCount": 39,
    "releaseDate": "2017-04-06T16:07:22.355Z",
    "tx": "0x79d3596ef565ee9f093ebfb14851491c9b09196e7bd3c2e6eed3b0720bd462a5"
  }
]
					`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="https://musicoin.org/json-api/tracks/top">
				<pre>
					<code>
						{`
[
  {
    "resourceUrl": "eipfs://QmTdrgpKo3vZkfvKNZYCsKNe3y3HRu4uR2TDTUugRDuBwa",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Attitude feat. Shade Sheist & Shane Trace",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "1",
    "artistProfileAddress": "0x893eee68c98bb49bdfaea999707a7a8653f5c9ef",
    "artistName": "Shomori Pass",
    "totalEarned": "4.87e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "4870",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmezjYC1fMqVYxEZuQBGyf2JSDKT2GWGwJvaGi4WNqwEYo",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmVhWvdPTiKQUfNMG2Yk19t5F1zNehqtCcGWmsHQ9bE38B",
    "tipCount": "0",
    "balance": "3",
    "contributors": [
      {
        "address": "0x893eee68c98bb49bdfaea999707a7a8653f5c9ef",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "4870",
    "address": "0xc836bac9f8c9c7475a99da4b4b618506bb130e66",
    "image": "/media/cf391f84a8cddc1d77990cb7c91b1ac8ce52ee0b3c1205e1441a8fe9d49f3f94436b7350baa0414c034a3f038644",
    "audioUrl": "/ppp/38fb5e5dab30cc43b0d84cf2997cf5e9f2c066ffb282ea44ce42ddde44c2b3af88ced7b0a8ba9d9a86748fb5f66894c3bdb9f757c325e83c",
    "genres": [
      "Hip-hop & Rap",
      "R&B & Soul",
      "Pop"
    ],
    "languages": [
      "English"
    ],
    "moods": [],
    "regions": [
      "Los Angeles"
    ],
    "description": "Legendary features with Shade Sheist & Shane Trace dedicated to the sexiest attitudes.",
    "timeSince": "5 months ago",
    "directTipCount": 348,
    "directPlayCount": 4878,
    "releaseDate": "2017-11-22T16:53:51.744Z",
    "tx": "0xd4657a07c87d1e03e85408fdf0895f9768db6c9f2ff14db12323fd2425d43363",
    "pendingUpdateTxs": {
      "distributionTx": null,
      "metadataTx": null,
      "imageTx": null,
      "titleTx": null
    }
  },
  {
    "resourceUrl": "eipfs://QmW9DMKhzU3ihcsSJ4f7Mz6umkurBrsNWuCM5hR3D5tVrJ",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "10",
    "totalPending": "0",
    "title": "La mappa dei tuoi sogni",
    "getContributorsLength": "3",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0xa7643b40c62ad278c6e740a45117a3a7a538c064",
    "artistName": "Lorenzo Pistolesi",
    "totalEarned": "3.933e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "3933",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmZ3N1ziZ6QMwbq23Boj7W5oyw49p8qaSWqzoWC6wTxa2F",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmPN1Hs1Su43keE784s8t6bCsHVXptazJATpCYsofRD38Q",
    "tipCount": "0",
    "balance": "5",
    "contributors": [
      {
        "address": "0xa7643b40c62ad278c6e740a45117a3a7a538c064",
        "shares": "4"
      },
      {
        "address": "0x977d9a3294e20c7b37ef8a71169c8b03966ec990",
        "shares": "2"
      },
      {
        "address": "0x3f6b19df2edaa872df87a5f8d9fd4a0e1f0424ad",
        "shares": "4"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "3933",
    "address": "0xe840ac4db68a78dd67e55a90a011e5a079f5a6b9",
    "image": "/media/cf3920cd8ca5e5454be22cace7012ea08841c326722302c46e29f08496e019b26776744b929e362d3a6f3027ed6d",
    "audioUrl": "/ppp/38fb585dac36cf41e78548fcc224a1e6a29365a9ee8ebb44c310888c43c2eeafd9c882ebffbcccc9d27b8fb5f66894c3bdb9f757c324e433",
    "genres": [
      "Disco"
    ],
    "languages": [
      "Italian"
    ],
    "moods": [],
    "regions": [
      "Italy"
    ],
    "description": "Romantic Italian Discotheque \r\nDisco Italia Amore \r\nLorenzo Pistolesi : testo e musica\r\nFabio Mueller : sound ingeneering, basso, mixaggio e mastering\r\n\r\nCerchi un equilibrio dentro me, che ti possa assicurare il quieto vivere\r\nCandide parole tra di noi, che nascondono paure non risolte sai\r\nE quegli sguardi duri e noi, come fucili spari e poi, nell’aria resta ancora quell’odore di bruciato\r\nQuand’è che impareremo a gustare a pieno la realtà che tutti i giorni ci circonda e c’incoraggia a viverla\r\nViverla anche quando tutto il mondo ti è crollato addosso\r\nOgni giorno fino in fondo in perfetto accordo con\r\nTutti i desideri che ti bruciano ancora dentro\r\nQuesto è quello ti che basta per trovare tutto il resto\r\n\r\nCercati il cammino piú sincero \r\nper restare sempre un po' in contatto con i tuoi compagni \r\nNon serve sai fuggire sempre piú lontano \r\nse hai in mano la mappa dei tuoi sogni\r\n\r\n",
    "timeSince": "3 months ago",
    "directTipCount": 204,
    "directPlayCount": 3947,
    "releaseDate": "2018-01-30T18:44:42.071Z",
    "tx": "0x49e49f18d432b19a9e0571b45ea9a9839e9cc1f2578de0afa78c0a42944350e8",
    "pendingUpdateTxs": {
      "titleTx": null,
      "imageTx": null,
      "metadataTx": null,
      "distributionTx": null
    }
  },
  {
    "resourceUrl": "eipfs://QmNT3ncdeuqSaqwogcgUZUFVAzbczbiHA4AL85zsEZYWiT",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "10",
    "totalPending": "0",
    "title": "Salvati",
    "getContributorsLength": "2",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0xa7643b40c62ad278c6e740a45117a3a7a538c064",
    "artistName": "Lorenzo Pistolesi",
    "totalEarned": "3.795e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "3795",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmSqSwNiJKC9qaXTDTqGduip7yqQYwUUP2dDSZJLnMJFtq",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmS9Zttdxv2JY9ZVj1CSe9RvKa2uYm8GZpX5b4244TvaQB",
    "tipCount": "0",
    "balance": "7",
    "contributors": [
      {
        "address": "0xa7643b40c62ad278c6e740a45117a3a7a538c064",
        "shares": "8"
      },
      {
        "address": "0x3f6b19df2edaa872df87a5f8d9fd4a0e1f0424ad",
        "shares": "2"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "3795",
    "address": "0x2738bf8e8c350acd35b7a7b7313b9b0faceddc2a",
    "image": "/media/cf39298f91e3d1455b9f3ed8e10207c6ff57dd0b21015edb2027b5ecbfaf3d8664136175ae933f5723760200ab5a",
    "audioUrl": "/ppp/38fb0f52ab3ecc44eb8412a9c970a6bfa59360abe98cef129817da8d4191b2f8889ed4b1fcedc99c82238fb5f66894c3bdb9f757c324e433",
    "genres": [
      "Live Recordings",
      "Jazz & Blues"
    ],
    "languages": [
      "Italian",
      "Switzerland"
    ],
    "moods": [],
    "regions": [
      "Italy"
    ],
    "description": "Angelo Acocella, batteria\r\nStéphane Fisch, contrabasso\r\nLeila Kramis, piano\r\nLorenzo Pistolesi, voce\r\n\r\nSalvati dalle paure, \r\nsalvati dalla realtà, \r\ndalle parole piú scure \r\nche girano in tondo di notte si sa.....\r\n\r\nRecorded by A.M.R. & Regata Collective C2015\r\n",
    "timeSince": "3 months ago",
    "directTipCount": 811,
    "directPlayCount": 3804,
    "releaseDate": "2018-02-04T20:12:29.356Z",
    "tx": "0xb4951e37f2f030954a046cd7f0046e2f435b1be86b617e6a2c841e7becd83cd2",
    "pendingUpdateTxs": {
      "titleTx": null,
      "imageTx": null,
      "metadataTx": null,
      "distributionTx": null
    }
  },
  {
    "resourceUrl": "eipfs://QmaxknKDVedEB3Q7micQv3MZLkLJLzeXeDbH3USEXeeRPe",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Crystal Ripples",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x339baed1615d347074f4e078a07e0646bb22329d",
    "artistName": "Sam Prock",
    "totalEarned": "3.428e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "3428",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmeS3GSMfzJsmQBC5W3cLpPCdHqRxrCa3dUijMWjGPq5fw",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmUkRnTidjZhnjHVQi3JQuRduMAVKr5EN1N7VQ4wj8iYyC",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x339baed1615d347074f4e078a07e0646bb22329d",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "3428",
    "address": "0x4a4422c868e24a095a83735c4b67af5cb05017f5",
    "image": "/media/cf391fadf1d3cc6177ae3792fd321dd18e549f2f090467e87316b5ef9eaa2bb207455058978422710a6b3973b95c",
    "audioUrl": "/ppp/38fb0904ac329c10b0d91cf29f77a2bff6ce66ffb388b916cf43ddde44c4eafc8d9bd7e2acb99cc8d6778fb5f66894c3bdb9f757c025e13a",
    "genres": [
      "Electronic",
      "Ambient",
      "Psybient",
      "Classical"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Sunny California"
    ],
    "description": "https://soundcloud.com/samprock/crystal-ripples",
    "timeSince": "4 months ago",
    "directTipCount": 1563,
    "directPlayCount": 3472,
    "releaseDate": "2018-01-11T21:40:11.782Z",
    "tx": "0xe5cdb4da0a93b24f0efdcc5b6603ccf08961d5667abab61dae9832ff34b3f180"
  },
  {
    "resourceUrl": "eipfs://QmRJs4wNeYQMNPy4b9CrnwBFoyiNrvGzAMvUsMQnztqjgJ",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Flower Power",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "1",
    "artistProfileAddress": "0x339baed1615d347074f4e078a07e0646bb22329d",
    "artistName": "Sam Prock",
    "totalEarned": "3.076e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "3076",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmUUwLm8SWnu7S5CZc1GLLwTFhyHXCHMLZinCciMNeb76p",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmagZXSMfDJbDL3zJfGPRnkFBvcF5q56NthSw6wc3QsPy6",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x339baed1615d347074f4e078a07e0646bb22329d",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "3076",
    "address": "0x68d363896bbfb00a336defb262591b62969fde63",
    "image": "/media/cf392fabb5d8f21442831394a7306ad1e1609d0b093840ff5136bdf5be9b209e787b6c5fbeaa1c56035e2a71e95b",
    "audioUrl": "/ppp/38fb0b5dfc359811ebd81ca89823f4eef69660adbddfeb439812df8e47cabaf88eca8ce4a0efc99a86718fb5f66894c3bdb9f757c02ce632",
    "genres": [
      "Alternative Rock",
      "Electronic",
      "Indie",
      "Beats & Instrumentals",
      "Indie Dance"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Sunny California"
    ],
    "description": "https://soundcloud.com/samprock/flower-power",
    "timeSince": "4 months ago",
    "directTipCount": 1523,
    "directPlayCount": 3112,
    "releaseDate": "2018-01-11T21:33:34.547Z",
    "tx": "0x14badaae9c79b3a5d383fad3948957786d0a09705feffc280721eea5f44fbc72",
    "pendingUpdateTxs": {
      "titleTx": null,
      "imageTx": null,
      "metadataTx": "0x08b873129170183153e87e49db4755933dec2e98918b9d0dab24198a6d0b4a20",
      "distributionTx": null
    }
  },
  {
    "resourceUrl": "eipfs://QmUZSaZYfJB1iTUaP8LrWgYNFtoq6LoNWFPsZa7GQMwA37",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "A Part of Me is Missing",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x789070d0e051154407fbf998729ed3523603bb05",
    "artistName": "Willem Sloet",
    "totalEarned": "2.92e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2920",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmejfpuqTZyBjiNkSBtFqs5PDj4rqctxQDpNK7CDL3tfjj",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmfVdnrc7yw8w7SM4KFxQcTLNpLbyrBMhPn3m9aMudzgAV",
    "tipCount": "0",
    "balance": "2",
    "contributors": [
      {
        "address": "0x789070d0e051154407fbf998729ed3523603bb05",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2920",
    "address": "0x5f852f4f37791ec474976221367a25cb4208115b",
    "image": "/media/cf391f94a4e4ea5d458e04a3fa0a11f9e841d80a340702fb5334f0cf97bb1cab6565757fb6fe365f01083c20b541",
    "audioUrl": "/ppp/38fb0803a0339c44e78719fdcd7ca7bba5c364aab28cb817c811da8a4592b9afdb9a81e0a9b19cce85208fb5f66894c3bdb9f757c02ce632",
    "genres": [
      "Folk & Singer-Songwriter",
      "Alternative Rock",
      "Indie"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Netherlands"
    ],
    "description": "A part of me is missing is about searching for love and loneliness, but not in a bad way.",
    "timeSince": "3 months ago",
    "directTipCount": 11,
    "directPlayCount": 2971,
    "releaseDate": "2018-01-29T13:50:30.525Z",
    "tx": "0xee39851a8d3fc2fbfefa30bb3518b69a9ec124b0294806f6d1fb687e6249639e"
  },
  {
    "resourceUrl": "eipfs://QmeHho2EzTjnmVsEgTY5LmvGoAnR6BZF4ZeP7R4UA2B3tC",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Sweet Baby - WoolyRock",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x789070d0e051154407fbf998729ed3523603bb05",
    "artistName": "Willem Sloet",
    "totalEarned": "2.682e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2682",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmejfpuqTZyBjiNkSBtFqs5PDj4rqctxQDpNK7CDL3tfjj",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmPrh1tNsyjKvY1kk5uY8onPRQgNdEA9m6bUXZnefbUR7G",
    "tipCount": "0",
    "balance": "1",
    "contributors": [
      {
        "address": "0x789070d0e051154407fbf998729ed3523603bb05",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2682",
    "address": "0x00bbc33d7e412fb2f6197ec7e3e94c530db16d97",
    "image": "/media/cf391f94a4e4ea5d458e04a3fa0a11f9e841d80a340702fb5334f0cf97bb1cab6565757fb6fe365f01083c20b541",
    "audioUrl": "/ppp/38fb0d55fa64cd11e0851dafce74a4b8a4c535a8ba82b94099178c8f17cabff98dcb85b6fbb89b9b89758fb5f66894c3bdb9f757c02ce632",
    "genres": [
      "Folk & Singer-Songwriter"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "description": "Release of Sweet Baby, a song about long distance relationships",
    "timeSince": "3 months ago",
    "directTipCount": 2,
    "directPlayCount": 2735,
    "releaseDate": "2018-01-25T15:26:50.772Z",
    "tx": "0xf44b3de329025d0cf264ca56281ea68eba26f19019a04a5b938ebf271c69e3ef"
  },
  {
    "resourceUrl": "eipfs://QmZ2WJJzNtenguVRowsyCpq9h7tyfYtmcASaAGitn59k8F",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "El Ciclo de La Vida",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "1",
    "artistProfileAddress": "0x50b76e92c7b8f0cbe80d301660a904af9b63411a",
    "artistName": "michele silvio pezzetta",
    "totalEarned": "2.561e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2561",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://Qmb3stK8GD7NuhhCxUHnQdmaAe7gTQonXA3xssZLPEoNhr",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmSJ9e8K2a2rEEG8Wn8j8L8g5CA4nNZrFvGd2qxTDG6Jo6",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x50b76e92c7b8f0cbe80d301660a904af9b63411a",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2561",
    "address": "0xb160f9564046f4f35b6e584f6fd7b2d269e14d93",
    "image": "/media/cf3918cdb1e0d41456904aafe50b37d1c356e42214105aca563bf3dab28907bd6c6036498eba2f571d7e2708b759",
    "audioUrl": "/ppp/38fb5f54ae36c81be6d71eface73f0eaa0c466fcbddebb1dce46dfda16c4e9a8dcca83ebfcb8999b89718fb5f66894c3bdb9f757c325e83c",
    "genres": [
      "Soundtrack",
      "Electronic",
      "Jazz & Blues",
      "Vocals & Acapela"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Canary Islands  Spain"
    ],
    "description": "differents stages from the begining to the end of life",
    "timeSince": "4 months ago",
    "directTipCount": 12,
    "directPlayCount": 2551,
    "releaseDate": "2017-12-23T01:13:57.896Z",
    "tx": "0xff5553d920751bde788b4f7976513aec1ed9306c5b62875df7ae41c69c220826",
    "pendingUpdateTxs": {
      "titleTx": null,
      "imageTx": null,
      "metadataTx": "0x9ac196687c3c3a8612b2a5028d5805b472c92927605377eba01f8108e5959cc1",
      "distributionTx": null
    }
  },
  {
    "resourceUrl": "eipfs://QmQe3TRwrnEL1vcygzamTcYikpaedtwNxV3Djko4Uc9rNP",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "In My Mind",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x339baed1615d347074f4e078a07e0646bb22329d",
    "artistName": "Sam Prock",
    "totalEarned": "2.559e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2559",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmY2jYtwop8V8z7B2WKiYEeozQwgY9dEmhZpCxuHeEBy93",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmSboeGaWEqFqtGJE7ncbQ6icJ5g7WgRAFbTiyXz9wvdg7",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x339baed1615d347074f4e078a07e0646bb22329d",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2559",
    "address": "0x60d473ea9316ede40633d8c584f24a926211e689",
    "image": "/media/cf3923cca8cdeb5b7ea445b7a81968d08954e7251c3152c46d0fb3dabfe10c9659495f41beb10053287e0a3fe618",
    "audioUrl": "/ppp/38fb0b55fc329911b68013f9cb73f3baa3c363a8b888ea1d9915d18814c1bffb81ca83e0a8b8c8c9887b8fb5f66894c3bdb9f757c12ce13c",
    "genres": [
      "Chillout",
      "Electronic",
      "Guitar",
      "Beats & Instrumentals",
      "Live Recordings"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Sunny California"
    ],
    "description": "https://soundcloud.com/samprock/sam-prock-in-my-mind-original-cordoba-mix",
    "timeSince": "4 months ago",
    "directTipCount": 383,
    "directPlayCount": 2579,
    "releaseDate": "2018-01-11T20:59:52.475Z",
    "tx": "0x34c64172f94417d96c6bb50996431fc7ee6b0d25eec1e959713278fdd667627a"
  },
  {
    "resourceUrl": "eipfs://QmR3KukoXmh1gDZ9UrqNhniBT3qiJkLuAGZzNGLbAsCSV8",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "2",
    "totalPending": "0",
    "title": "Madness [with Newen X]",
    "getContributorsLength": "2",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x912c751f82b541040af9efcaa80ec34f673f8a0d",
    "artistName": "Raven",
    "totalEarned": "2.552e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2552",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmUi5DUCJQmrRmxbHeo3LTTE8krfRskE2729WMtZ4w1uD4",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmbLZvJ5fvkyz7NNa9WamkZi5c83iY4To3kakWabxiLyCt",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x912c751f82b541040af9efcaa80ec34f673f8a0d",
        "shares": "1"
      },
      {
        "address": "0xd76ee96a583106b775a4c0b14c1fcd38a284c7bf",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2552",
    "address": "0xe57e09b786c4d4c454ad1277da894b8ee3c6f2e9",
    "image": "/media/cf392f97f7d0ca6f5b851093c20e27f0f366c37f092063ee2f35b6dbb4ab039606163708aa840141794c79339b1f",
    "audioUrl": "/ppp/38fb5850af639e1bb1d612fc9971f2eaa5c366aaeadfbf17cd178ddd4acabff8809dd0e1fabfcbcdd57b8fb5f66894c3bdb9f757c025e13a",
    "genres": [
      "Hardstyle",
      "Hip-hop & Rap",
      "Electronic"
    ],
    "languages": [
      "English"
    ],
    "moods": [],
    "regions": [
      "Germany"
    ],
    "description": "Fantastic collab with Newen X which helped letting my crazy-dark side out. Arent we all mad sometimes? :D @ August 2017",
    "timeSince": "5 months ago",
    "directTipCount": 584,
    "directPlayCount": 2613,
    "releaseDate": "2017-12-07T10:20:51.429Z",
    "tx": "0x707160806ca7518660a0879f7598917a96aa6f9afc61a8d70e2bd94970ad5eac",
    "pendingUpdateTxs": {
      "distributionTx": null,
      "metadataTx": null,
      "imageTx": null,
      "titleTx": null
    }
  },
  {
    "resourceUrl": "eipfs://QmbSXbwkWSJAJbKDk2Ym4FaYwpsbfZV87SKRPL3nLxS6Kz",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Space Racers Cosmic Music Box",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x96573f3091f099c340145563d80b5ec65bd120da",
    "artistName": "Clubfungus",
    "totalEarned": "2.448e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2448",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmWwj98qmSA4mDPrXXf9fbYdjirGCwoWQmNyEzoDDW3vMB",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmbV83M65PX89smZMuq4cSPc1t4642v4pcktvyQMu9fWxZ",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x96573f3091f099c340145563d80b5ec65bd120da",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2448",
    "address": "0x0ed5d862c5d162913863d4e035fdd97b5db28f34",
    "image": "/media/cf392d89a8ada75d7c873cd5fd270fe0e35bca7523166ecf7d37b6faa5af0784654c4b48b8b31a5f096c7b309269",
    "audioUrl": "/ppp/38fb0d00fc33ca1ae5d349ff9e74a0ecffc660a6bd88ea119f10da891497efa38f9a80b6fbbb959983768fb5f66894c3bdb9f757c325e83c",
    "genres": [
      "Trance",
      "Electronic",
      "Soundtrack"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "description": "What could replace a repeat of Ben Hur on the televison maybe your imagination and of course The Annual Space Racers Convention which takes place across from the Dyinthyian Crystal Galaxy on the eve of the annual Great Cosmic Spacial Tide Shift of the Dronaguran Nebula Cloud which is some 300 million light years across creating a unique and challenging obstacle course for the space racers with untold galactic wealth from gambling and cheating with the winner taking the Alien Magical Music Box as a trophy giving the owner untold cosmic powers when heard and with many deaths each year as light speed travel is common place and in such a vast area of space authorities have no chance of stopping the race in this original fantasy sci-fi techno acid soundtrack instrumental! Race commences on a brief opening of the music box by the Guardian who can also enter the race to try and win back there trophy as from this point on the music box cannot be physically moved until the race is completed or everybody dies and then the box will close and it returns to the cosmic void to re-appear in the same spot next tidal shift and the race starts again! A magical ball of light is released when race commences, which entrants chase on an unknown course through the nebula cloud set by the cosmic powers held within the alien music box, winner is the entrant who makes it back alive and has followed the light throughout the full course! Then the light returns to the music box upon closing of the of the Great Spacial Tidal Shift and the new Guardian is chosen and is the only one who may then pick up and physically hear the music box and receive its cosmic powers!",
    "timeSince": "4 months ago",
    "directTipCount": 230,
    "directPlayCount": 2487,
    "releaseDate": "2018-01-16T11:21:33.152Z",
    "tx": "0xd48e745d3e72c07142d9a58cc2f51b34fb8660b254ad88c390a66ab9469a913f"
  },
  {
    "resourceUrl": "eipfs://QmP6KAfN2V64wRHLADxefd3qPyQDpnybBfqNc117aNucq5",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Parchman farm",
    "getContributorsLength": "1",
    "licenseVersion": "5",
    "metadataVersion": "0",
    "artistProfileAddress": "0x48ced794e6fae2a672a416f18d93021d45efdfa2",
    "artistName": "Spleen-Musical",
    "totalEarned": "2.441e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2441",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmVbfGhhZCskRfN8Gqq611sshtWGhQVW1cbiiVkduEMD37",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmdA6K1udMxfoXJC8oos3MvigFHkmbQeDZfxhQH1RJi3FX",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x48ced794e6fae2a672a416f18d93021d45efdfa2",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2441",
    "address": "0xa8b6690803aec739f60ba888ee047dad5aabe8d1",
    "image": "/media/cf392c9ca4d3f7444b970e8ac20511aafc72dd7a744544d87f2a93fa8e893e8405426758949f1e7f387e0502ec1c",
    "audioUrl": "/ppp/38fb5c5dfa30981be3d91af99b20f5e9f5ce35a8bbd9ef1dc2188cd942c7bcfed99c80b3f8ebc8c7d4738fb5f66894c3bdb9f757c02ce632",
    "genres": [
      "Pop",
      "Hip-hop & Rap"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Paris"
    ],
    "description": "Original instrumental by Spleen-Musical with acappella of Son House.",
    "timeSince": "7 months ago",
    "directTipCount": 154,
    "directPlayCount": 2449,
    "releaseDate": "2017-10-03T15:25:21.332Z",
    "tx": "0x7f0297a8a890f3a5ada0137d56d42f4177811cb11fdb531e0d8b88af4d625cfa",
    "pendingUpdateTxs": {
      "distributionTx": "0x453bd292dd64a102e4604507c96a9890d5f65e0f4dff1fff27f127bba631c57c",
      "metadataTx": null,
      "imageTx": null,
      "titleTx": null
    }
  },
  {
    "resourceUrl": "eipfs://QmZW1TLdQQp3uK8Bnv6m2fEG5PNZqfFX7JkNNA4FpqzPqX",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Dance! (feat. Kristin)",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "1",
    "artistProfileAddress": "0x912c751f82b541040af9efcaa80ec34f673f8a0d",
    "artistName": "Raven",
    "totalEarned": "2.388e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2388",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://Qma9LYoQMXLJ9MPNxuqy7WFv6UVqA8XwS3nq8V1m7MkYo6",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmS3o5fs4fgzo4ZA6FbEH8ECAuiVXCqTvPK326nBajbg8d",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x912c751f82b541040af9efcaa80ec34f673f8a0d",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2388",
    "address": "0xb969b74040b3ee1eadbf6be8581ea787d0874168",
    "image": "/media/cf391bc78ecdf07d5c8c31aba92e0fdcc376dd35722371dd210b92cca7e030a467126b40c59f44767a76231fb01d",
    "audioUrl": "/ppp/38fb5f5cae3fcc15e7d11efa9876f3bbf79232fae9ddb8479f18dc844396eaad80cfd1e2a1be99ce867a8fb5f66894c3bdb9f757c023e93a",
    "genres": [
      "Dance & EDM",
      "Electronic",
      "Pop"
    ],
    "languages": [
      "English"
    ],
    "moods": [],
    "regions": [
      "Germany"
    ],
    "description": "I won the grand prize in the category \"Electronic Music\" at the Hofa Song- und Produktionscontest 2016 with this song!\r\n© June 2016",
    "timeSince": "6 months ago",
    "directTipCount": 211,
    "directPlayCount": 2428,
    "releaseDate": "2017-11-17T15:36:04.752Z",
    "tx": "0x66206504f297b49ca0a46df16e1171b97cb088f66bd1b3f2338d079a3d22c501",
    "pendingUpdateTxs": {
      "distributionTx": null,
      "metadataTx": "0xde4e2df4d0987f03a5618078b62fe74b3428947fd35fe64ed7e835410d26e8c7",
      "imageTx": null,
      "titleTx": null
    }
  },
  {
    "resourceUrl": "eipfs://QmRKka8bLQVTqXUzLGBxqnegZFVFqQ4urq3dgXLprFVPi5",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Confused (Chapter 2)",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "2",
    "artistProfileAddress": "0x2b24c7244c509f2ddfb32597c6d820fc2449d213",
    "artistName": "Self Suffice",
    "totalEarned": "2.338e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2338",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmNLw8kPswPFTyoVTChKcWTz3GDYfPBmiiAoKddvMonWfE",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmPKRZPHSmVmm17ypXyvzuTBwQT5EiKfdqjM4SCkDCMhkX",
    "tipCount": "0",
    "balance": "17",
    "contributors": [
      {
        "address": "0x2b24c7244c509f2ddfb32597c6d820fc2449d213",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2338",
    "address": "0x748bd8be7f6c3978b071a8d9e82be9836fee3a5b",
    "image": "/media/cf3934b2b5acf47c62a32da7c41a30c4ef40c407262363d1241980e480882abe5d48445eb6ad116d00542611b96e",
    "audioUrl": "/ppp/38fb0a51a064ca1ab1841daccc26a5e7f1cf31aebc8aef1d9e198c844091eea380cb83b4fcec9e9e85208fb5f66894c3bdb9f757c325e83c",
    "genres": [
      "Hip-hop & Rap",
      "rap",
      "hiphop",
      "spoken word",
      "poetry",
      "rapoet",
      "self suffice"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Hartford",
      "CT",
      "LES",
      "Lower East Side",
      "New York",
      "NY",
      "New York City"
    ],
    "description": "The 2nd Chapter sees our protagonist, Kha-lel beginning to overcome his own defeatist mindset in a journey of increasing \"SELF CONTROL\". Here, he rises from rock bottom trying to be more responsible, though he's still completely confused about where to start. This audio-storybook album semi-autobiographically describes the struggles creative people have gone through, on the way to living their True Purpose. Can you relate?\r\n\r\nThis is Self Suffice's 1st solo album since recording the critically acclaimed \"Manhattan Night\" CD with Dreamville's Mez. Leave a Tip if you feel it... PEACE",
    "timeSince": "4 months ago",
    "directTipCount": 17,
    "directPlayCount": 2380,
    "releaseDate": "2018-01-14T08:31:08.291Z",
    "tx": "0x9043359ee472f44c88855df935ddaa3e7c7888f4348d37efc19373ade47fd015",
    "pendingUpdateTxs": {
      "titleTx": null,
      "imageTx": null,
      "metadataTx": "0xccb8e299d0e0c366373f85dbb4e31590e3b741e958c5572364e8dea1c7a18ea5",
      "distributionTx": null
    }
  },
  {
    "resourceUrl": "eipfs://QmT28UV4NMCs9KCaxSmSLVasXbaLeizLf1WtSHB3x9BPWE",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Time Speck",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x339baed1615d347074f4e078a07e0646bb22329d",
    "artistName": "Sam Prock",
    "totalEarned": "2.334e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2334",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmPtoyiF22BMh7LggMfS9KDUUP7x7zCekMtWR4TksGFfk5",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://Qmd31F96vpfTEbJt5mURExhzZzpKE9gLn1gwhTa6rCEtaX",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x339baed1615d347074f4e078a07e0646bb22329d",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2334",
    "address": "0x3d6d293e6ebae6ed49be60df6026dadd0fcbc542",
    "image": "/media/cf392a8aadedf66a23e63facf85413f5dc4eca1f7c3f73fe420ef3c5d1a22bb65f6c7166affd21703e7c0e20b41e",
    "audioUrl": "/ppp/38fb0e01ae629c1be0841caf9824f3e8a39367a7e9deb8159e46df8c40c5effbdc9c85b4faebceca84708fb5f66894c3bdb9f65ec82ce038",
    "genres": [
      "Ambient",
      "Electronic",
      "Classical"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Sunny California"
    ],
    "description": "https://soundcloud.com/art-of-nonsense/sam-prock-time-speck-ambient",
    "timeSince": "4 months ago",
    "directTipCount": 29,
    "directPlayCount": 2354,
    "releaseDate": "2018-01-11T20:02:42.693Z",
    "tx": "0xd3aaea87a9c122b3322e048fa69dd612d47379a2bf4e77dc3ff3ffcbbbbd6fa4",
    "pendingUpdateTxs": {
      "titleTx": "0xbde0981cbdc3ee668cdb4db659d3219deb401ad6314505c0d263b17ca0e929d2",
      "imageTx": null,
      "metadataTx": null,
      "distributionTx": null
    }
  },
  {
    "resourceUrl": "eipfs://QmUcokW2emDpFfqxMouPVL1ScP2j4ZsZjovSHtXUtQ26Sp",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "ÂḼḮḜṄ  ṔṜÖḂḜ 👽",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x96573f3091f099c340145563d80b5ec65bd120da",
    "artistName": "Clubfungus",
    "totalEarned": "2.242e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2242",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmNdAm7GQsVLn8X6r7U9KnarX5FUGeypdfTk95kGfvVEgz",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmdbS4pqetNp5pVYBNFcN6S14qLaPNSWrGTe1PzAvbXMWj",
    "tipCount": "0",
    "balance": "12",
    "contributors": [
      {
        "address": "0x96573f3091f099c340145563d80b5ec65bd120da",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2242",
    "address": "0xb251e22f267cf3d81fe3684d098dfb1d50daf49c",
    "image": "/media/cf39349a83f9a86b40a72badfe5b07a4c934f9750e1a56d94f6b82e8a1bd11a35047515ac4fc1e5c2b4d1e03b851",
    "audioUrl": "/ppp/38fb5f57ad37cb10e18718fccd26f0eda2cf62f8ee88b81dce44d9854a97edf8899c80e2fde8cbcb89218fb5f66894c3bdb9f757c324e433",
    "genres": [
      "Electronic",
      "Beats & Instrumentals",
      "Gaming",
      "Funtronica",
      "Sc-fi Adventure",
      "Soundtrack"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Wigan"
    ],
    "description": "Alien encounters of the werid kind in this extraterrestrial bend over and get plugged in alien probing experiment session, some say they do this as its a direct connection to your brain unfortunately it is through ya butt! Some may enjoy this or not if your ever happen to be the unfortunate one to see the alien probe then youve waken from there alien drugs and its time to try and escape and run like youve never run before but they chase and hunt you down! Does our hero escape with Butt intact!! lol Find out in this original electro psytrance psychedelic gaming sci-fi acid progression! Peace! :D\r\n\r\n...................................................................................................................\r\nhttps://soundcloud.com/clubfungus/alien-probe\r\n...................................................................................................................\r\n\r\n\r\n▒▒▄▀▀▀▀▀▄▒▒▒▒▒▄▄▄▄▄▒▒▒\r\n▒▐░▄░░░▄░▌▒▒▄█▄█▄█▄█▄▒\r\n▒▐░▀▀░▀▀░▌▒▒▒▒▒░░░▒▒▒▒\r\n▒▒▀▄░═░▄▀▒▒▒▒▒▒░░░▒▒▒▒\r\n▒▒▐░▀▄▀░▌▒▒▒▒▒▒░░░▒▒▒▒\r\n\r\n",
    "timeSince": "2 months ago",
    "directTipCount": 245,
    "directPlayCount": 2249,
    "releaseDate": "2018-02-21T15:18:48.039Z",
    "tx": "0xad2a7718d893fc695ed0bb7b691014975f03ba15a6c0180b8515593d96839a7b"
  },
  {
    "resourceUrl": "eipfs://QmRksrq95o8EhetXghzRvdzfPPQhc7YyiJ1nioupyD1iQE",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Woman Don't Cry ",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x0f8df2e0f5d302407e56e17b81051f03dc4767d4",
    "artistName": "Amaray ",
    "totalEarned": "2.217e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2217",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmQTAh1kwntnDUxf8kL3xPyUzpRFmD3GVoCKA4D37FK77C",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmaoNTrhz9hN86Nsb8R2qCJanfmn5HhQFBg2h6MQhe3bjD",
    "tipCount": "0",
    "balance": "16",
    "contributors": [
      {
        "address": "0x0f8df2e0f5d302407e56e17b81051f03dc4767d4",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2217",
    "address": "0x83730788de5b08c7c6993f9beca714f340216fcf",
    "image": "/media/cf392baa83fcae4766ba098fd43627f48368e07f3d244efe6d2e96fb8b9c5b94624e467abcfd31287a7d0371e868",
    "audioUrl": "/ppp/38fb0556af359e15ebd94eafcf27a6e6a5c030a8b282bd43c3428cdf13c4baaedecb81e2abb89b99d3248fb5f66894c3bdb9f65ec82ce038",
    "genres": [
      "R&B  raggae"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "timeSince": "1 year ago",
    "directTipCount": 138094,
    "directPlayCount": 2214,
    "releaseDate": "2017-02-17T22:53:09.497Z",
    "tx": "0xfba8576b0831268feba6b790dc799f6adade1e5f452ca7cdd85971c20a86512b"
  },
  {
    "resourceUrl": "eipfs://QmXcuX2r7tVipo49fWg4HFWozH6a13XBhDstb8gTUVjvj9",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Stargaze",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x339baed1615d347074f4e078a07e0646bb22329d",
    "artistName": "Sam Prock",
    "totalEarned": "2.1e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2100",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmRnSSqGXZWkMTkDn2hAHfksU1oQWciwu28ti7H56Zbncj",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmaubCcSuoMYU5HdYWWEPqXwrcXiHWe2ieE6ukDP8dYz9W",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x339baed1615d347074f4e078a07e0646bb22329d",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2100",
    "address": "0xeae96039c2da6df706b29b6c9c62d0c7d30dfb11",
    "image": "/media/cf39289091c7ee6b498e2a8add3734d6d531c40d0d125cd8426fabecb1bb01a441133d4594fe3d2e7b612a28bc41",
    "audioUrl": "/ppp/38fb5804fd3f9812e0d849f89e24a0baa0c063a8e989b747cc43d0df44c1efaadbcfd1e1a9edcb9d81738fb5f66894c3bdb9f757c12ce13c",
    "genres": [
      "Ambient",
      "Electronic"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Sunny California"
    ],
    "description": "https://soundcloud.com/art-of-nonsense/sam-prock-time-speck-ambient",
    "timeSince": "4 months ago",
    "directTipCount": 141,
    "directPlayCount": 2127,
    "releaseDate": "2018-01-11T20:46:54.916Z",
    "tx": "0x134e3292289467eec92768a95ffa1ba9bc7e4be7d688f5d15f4a746e43f36364"
  },
  {
    "resourceUrl": "eipfs://QmaDpmfDQQps6VbJJ4dGArkD9CZNbW3hfa2AuVcT5JZGoU",
    "contentType": "audio/mpeg",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Funtronica",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x339baed1615d347074f4e078a07e0646bb22329d",
    "artistName": "Sam Prock",
    "totalEarned": "2.066e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2066",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmZSoL7Bu2QsHK64R4TszX6aKqjhxJDUcUWhTNW33W9wKe",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://Qmc452vv7Hvk5N48gAvrgM7LcgM9JqFcVhUnrEanfojnEE",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x339baed1615d347074f4e078a07e0646bb22329d",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2066",
    "address": "0xab68146e8db2ed2ff2db369327000a1d2d9e358d",
    "image": "/media/cf3920adadd8a86e64e62c92d82869a6e937f83f3f2c01ca5c2faed59e922c8657745259a98722287e6c7131944e",
    "audioUrl": "/ppp/38fb5c07ae3e9f16e58412ae9877f3baf49135acefd9bd13c313db8b42c3bbfb899c87b6a0ec9eca88268fb5f66894c3bdb9f757c12ce13c",
    "genres": [
      "Disco",
      "Funtronica",
      "Electronic",
      "Dance & EDM"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Sunny California"
    ],
    "description": "https://soundcloud.com/prockjet/funtronica",
    "timeSince": "4 months ago",
    "directTipCount": 178,
    "directPlayCount": 2085,
    "releaseDate": "2018-01-11T18:51:07.877Z",
    "tx": "0x7d690ad5de1f474d8156721b9c242babb664b66f09c03dfbb970b4de1606a1ec"
  },
  {
    "resourceUrl": "eipfs://QmdpMtDsHoMjhr8EPDoLgmakdQizyioTHnnvrmV2EwpXto",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "Weak In The Mind",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0x0408cd2e70ce44e8b8688ea3016fff20f9dd7ef4",
    "artistName": "Tea Man",
    "totalEarned": "2.032e+21",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "2032",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmaLcVsonjUjm31knVgzM7qazDrGSNYaSAcALfQqHW3fu5",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmNg2DJTNRfiVG7okVzKj5bdiWRSHBKwQskXfMvZK15Jum",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0x0408cd2e70ce44e8b8688ea3016fff20f9dd7ef4",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "2032",
    "address": "0x6638aeae7c4d10f451f828ac521cd21236666a1b",
    "image": "/media/cf391bb2a1c2ec437fbe288bfd506ef9d555cb36084346ca6d1ab6fab59631b267606670b1af246a056c7b20aa1e",
    "audioUrl": "/ppp/38fb0b53ab3ecf47b2841da9ce21a7eea0c366afed83bc1d9b43dc8e4390efa889ca86e4afbf9b9e81208fb5f66894c3bdb9f757c321e332",
    "genres": [
      "dubstep"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "England"
    ],
    "description": "YES PLEASE ",
    "timeSince": "4 months ago",
    "directTipCount": 1002,
    "directPlayCount": 2061,
    "releaseDate": "2018-01-13T15:06:57.828Z",
    "tx": "0xd8ab48e7cfb189c3b45d1284a5ada48287fe578ece2033af6df59a84a5a95483"
  }
]
					`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="https://musicoin.org/json-api/tracks/random">
				<pre>
					<code>
						{`
[
  {
    "resourceUrl": "eipfs://QmZN74p9rj2ATDxQwZjEL8EeKmVisH2fcExgSrohm7D6fi",
    "contentType": "audio/mp3",
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "totalShares": "1",
    "totalPending": "0",
    "title": "End of you trip",
    "getContributorsLength": "1",
    "licenseVersion": "1",
    "metadataVersion": "0",
    "artistProfileAddress": "0xbd9a614faae54868e5edc2f06f2f1c97fb604188",
    "artistName": "Shotgun Orchestra",
    "totalEarned": "4000000000000000000",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "playCount": "4",
    "contractVersion": "v0.7",
    "imageUrl": "ipfs://QmNjSfok79a6EAVaCGnNkxVyRxEUrDG9rBdXxVNEqwTeBR",
    "weiPerPlay": "1000000000000000000",
    "totalTipped": "0",
    "metadataUrl": "ipfs://QmeHYRbUmiMH9mcpbbvvzfJAMfQAkWGu2Myhoc1sr7h4rP",
    "tipCount": "0",
    "balance": "0",
    "contributors": [
      {
        "address": "0xbd9a614faae54868e5edc2f06f2f1c97fb604188",
        "shares": "1"
      }
    ],
    "royalties": [],
    "coinsPerPlay": "1",
    "totalEarnedCoins": "4",
    "address": "0x694f60c9dd3a0a1120ae0fcd9fbf337e7239ee40",
    "image": "/media/cf39349491f2f04726ed1cd7d52209f3f844c2022e0c61d2452681e8949c2fea46636169859f3b5e3c4c1c239d79",
    "audioUrl": "/ppp/38fb0b5cac609812b0d84eaec924a6bff7c661aeeadebe439944d0da1095b8a98f9d82e0aab0c89a84728fb5f66894c3bdb9f750c526e23a",
    "genres": [
      "Breakcore",
      "raggacore",
      "Hardcore Techno",
      "crossbread"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Russia"
    ],
    "description": "",
    "timeSince": "6 months ago",
    "directTipCount": 100,
    "directPlayCount": 4,
    "releaseDate": "2017-11-10T16:58:06.593Z",
    "tx": "0x73a5448922c362bf2ff56b3a61f453365d088eebcdc90564efb1c979af0efaa5"
  }
]
					`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="https://musicoin.org/json-api/tracks/random/new">
				<pre>
					<code>
						{`
[
{
"resourceUrl": "eipfs://QmeTuAweBj3qwJSiVH9vpfuy7J9oi6NyFhzKDdFtgE94Vz",
"contentType": "audio/mp3",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "Mi em Mim ",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0xf73b0387e7a1c5c3b5f80a1559906d376820f8f9",
"artistName": "BandaDIZ ",
"totalEarned": "22000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "22",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmeDvsSKB57BovMsaKuhYnucjWJr7sXVxd7XS8vRE5Pnn4",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://Qmc9YJKfvfZ45B49CVS2m48d9rYK75Q2eW6KpVcPHiqgCU",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0xf73b0387e7a1c5c3b5f80a1559906d376820f8f9",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "22",
"address": "0xed703d11d327ac0d7b062da65026c2f9344c866a",
"image": "/media/cf391fbab4e7cc6753e14aa3ff1512e1da48d9241c1a42c87d098ecfd1ab30854c453269aef10349080e1828b11f",
"audioUrl": "/ppp/38fb5801af369d46e2d04ef9c872f7bdf69364fcbb8dbc419b16dc8c40c5e8a8dec186e6adea95c986238fb5f66894c3bdb9f457c523e83f",
"genres": [
"Trilha"
],
"languages": [],
"moods": [],
"regions": [
"Brasil"
],
"description": "Trilhas compostas por L&S BandaDIZ nosso projeto de composições de trilhas. ",
"timeSince": "20 days ago",
"directTipCount": 0,
"directPlayCount": 22,
"releaseDate": "2018-04-12T22:54:59.160Z",
"tx": "0x69ec380b2e7376675ce7ecaa6ee7edc93712d39ff8190c32c1b588fbafcecc19"
},
{
"resourceUrl": "eipfs://Qmd8FgkierfY99sxjjx235wrgu4MStTqsWW1dQnXxbRxSq",
"contentType": "audio/mpeg",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "Band of sand",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "1",
"artistProfileAddress": "0xc2f7edbc312ab94b3b058787142afd9bf864a97a",
"artistName": "Sovra",
"totalEarned": "56000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "56",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmbkiKuMSeZs3jWhXKH98rqF47KxPzoUwA1d2FEiz2VwCu",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmYARcnWZM8GpjujLzQ6bKPyVzVmBWEi8Bb46pMBWfPHnS",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0xc2f7edbc312ab94b3b058787142afd9bf864a97a",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "56",
"address": "0xcc58fcb28af7577a827567d4da63e074f0b91a88",
"image": "/media/cf391895abdfea6142b12792a30908fae348e4757d0646ed23698fc5b6a2078643603455cf8f307237091e319c5e",
"audioUrl": "/ppp/38fb5e06ad3ec841b1d312ab9c72a3e9f1966bacbc8eb8129e148ddd44c0eeaa8fccd3e2fbb09c9e887a8fb5f66894c3bdb9f457c325e53e",
"genres": [
"Adult Contemporary",
"Folk & Singer-Songwriter",
"Experimental",
"Indie",
"Pop"
],
"languages": [
"English"
],
"moods": [],
"regions": [
"Essex"
],
"description": "These pretty pictures of him, that i made in my head\r\nI should have thrown them in, laid them on the sea bed.\r\nThrough sun and salty air, come and share...\r\n\r\nMy wedding band of sand, my wedding band of sand\r\nGone with the tide, he will be by my side,\r\nand if i put my hand in the sea, then he will come back to me, he will come back to me.,\r\n\r\nThis hopeless hoping pulls, at the end of my rope.\r\nI'm gonna throw, see what life brings, i'm gonna catch ya, and hold you to me,\r\nI know i've got my bait and I can wait...for my\r\nwedding band of sand, my wedding band of sand,\r\ngone with the tide, he will be by my side,\r\nand if i put my hand in the sea, then he will come back to me,\r\nthen he will come back to me, he will come back, he will come back to me. ",
"timeSince": "5 months ago",
"directTipCount": 11,
"directPlayCount": 55,
"releaseDate": "2017-12-15T00:59:10.257Z",
"tx": "0x782ff65bed8737a68cd78c14a3ce2e220c65b37f4668a0395b05ccc3b97203d0",
"pendingUpdateTxs": {
"distributionTx": null,
"metadataTx": "0x1f42015e6eab323285e8f7d1b9cf5a624b6548f661a181a3b2e21f07be0a60fd",
"imageTx": "0xe62a5e4647fd6a3efa7ae40c37a12addb7f6e36c2343524c2aaf51df71c0033d",
"titleTx": null
}
},
{
"resourceUrl": "eipfs://QmbEHmgPxEhCfRTAhqYqx9Q3Dbx2WgQNxrhKQegSYqqY2y",
"contentType": "audio/mp3",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "Shàng 1 (Swedish)",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0x9addce5bd6ee2426d451f9e029f1d759654ac97a",
"artistName": "GJART",
"totalEarned": "119000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "119",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmbMXKwrsjyAdpoeYi4dVnkQ6K2Ama1QXcBK6uNv3WcbCs",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmWe86oPXoic5jXVoUP1Wq6Z7ei2Tdi9MEAUSiCwarqVE3",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0x9addce5bd6ee2426d451f9e029f1d759654ac97a",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "119",
"address": "0xbaca17432c6d46756181011e58ca162ee092a62c",
"image": "/media/cf3918b39adfe85e62be04a0f41330f7e26a9828131a5cfa2115f6fc8bb959826c42477acbbc3b6d7e6c2b249c58",
"audioUrl": "/ppp/38fb5f04fb679f15e7d218a9cc21a2e8f1c265afb38abe14cb45dc841192baac8a9dd0e2a0bbccc982218fb5f66894c3bdb9f457c52de73b",
"genres": [
"Electronic",
"Soundtrack",
"Video"
],
"languages": [
"Corporate Video"
],
"moods": [],
"regions": [
"Marbella"
],
"description": "Last year we were asked to create a soundtrack for Cibes Lift Group's 70th anniversary video. The brief was to make one version \"sound a little Swedish\" and another \"sound a little Chinese\"! You can watch the video here https://www.youtube.com/watch?v=XBMI9pDlcNM",
"timeSince": "4 months ago",
"directTipCount": 5,
"directPlayCount": 119,
"releaseDate": "2018-01-03T18:43:24.368Z",
"tx": "0x93fe5058745ca92f5a046da4680901d8bec9c851dbba2d5b7f7f3eb173c2a581"
},
{
"resourceUrl": "eipfs://QmdBgzZughLse7v64kufpvawcP281WJ1DErVY1CZjkv9pv",
"contentType": "audio/mpeg",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "0",
"totalPending": "0",
"title": "Stillborn",
"getContributorsLength": "0",
"licenseVersion": "2",
"metadataVersion": "0",
"artistProfileAddress": "0xb82bd76a9feecebd551438e211a4c5917b6708c8",
"artistName": "melon",
"totalEarned": "0",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "0",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmbMeEQCedydgsCbNrztWsJHggzT4GiokXuNnAWmXYXz5W",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmY6TuNE9S9jrmoLLjJpbbGkQNaVrBKBUnL8m9fqoSLr19",
"tipCount": "0",
"balance": "0",
"contributors": [],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "0",
"address": "0x5781bef2448b55ac630b60a7374ee95d779b3419",
"image": "/media/cf3918b3a7d1ce6f74b00485f7101cf0f571d63812077de37039bee9d29f01bc5f79707f938822761562103cea7c",
"audioUrl": "/ppp/38fb0852a037cc47b5d31efec227a3eba79465adbbd9b8159b17da8b4696eea38d9c82e5a0eb9ecb817b8fb5f66894c3bdb9f457c325e53e",
"genres": [
"Alternative Rock",
"Rock",
"Experimental"
],
"languages": [],
"moods": [],
"regions": [
"Poland"
],
"description": "original by Black Label Society",
"timeSince": "3 months ago",
"directTipCount": 0,
"directPlayCount": 0,
"releaseDate": "2018-02-01T17:59:49.591Z",
"tx": "0x15a5aa55eedd37738ffc019a14b045e67f865dc00597c17130fa992fba943ee4",
"pendingUpdateTxs": {
"titleTx": null,
"imageTx": null,
"metadataTx": null,
"distributionTx": null
}
},
{
"resourceUrl": "eipfs://QmUk8qJuhX72tAEK8fmCKkc2MaE1BNmMA8nfh56qAhmTKa",
"contentType": "audio/mpeg",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "The spin",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0x829073e61aff94ce3668ac6bc266340571c04142",
"artistName": "Dookiebrownflow",
"totalEarned": "9000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "9",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmdrjQbJuJSxdAVfYu3ETBpgDg5UZ4Pd2WiwhyQbxyp6nb",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmQdcMsVBGBsoHgzDL86itJrmXaJxksP7yZrVs4QzxYnc4",
"tipCount": "0",
"balance": "1",
"contributors": [
{
  "address": "0x829073e61aff94ce3668ac6bc266340571c04142",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "9",
"address": "0xc019f117a91149bfc9b75dace0cfee4857c12660",
"image": "/media/cf391e8ca8c5fd66649e2e99f42209f4e2769f09113647cc5339f1e8bcec38b706766c4695b0247935423870b149",
"audioUrl": "/ppp/38fb5e55a93fc813e2d64bf3cb74a2e7a49130a7e98cbb419b438c8c1195eeff8cc080e5fab89fc986728fb5f66894c3bdb9f457c52de732",
"genres": [
"Hip-hop & Rap",
"Beats & Instrumentals",
"R&B & Soul"
],
"languages": [
"English"
],
"moods": [],
"regions": [
"The Womb"
],
"description": "The Spin is a story told from the perspective of a vinyl record...\r\n\r\n#Spreadthedookie\r\n\r\nTHE WOMB IN YA ROOM!",
"timeSince": "1 month ago",
"directTipCount": 1,
"directPlayCount": 9,
"releaseDate": "2018-03-28T04:31:57.520Z",
"tx": "0xb6217b3568069861f4b5703dbb847ab6924d64a752d42219965dabb5dfb5d2ae"
},
{
"resourceUrl": "eipfs://QmPaf6o55oT3uNQ76m2RFxYutnZsvMzsejtVrNhNWc1i1R",
"contentType": "audio/mp3",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "Intuition",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0x611afab85d235fbb6d80e6cb2cc24d54b679a8f8",
"artistName": "Slack-T",
"totalEarned": "8000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "8",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmVW5GfusXa8tCkqfy2e7mTToUy1HUfiJCQpfibXQGt841",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmRXVHvcwkWAMZDpVmJVEh9zVN64t3tYKbiUAThtVZVzEy",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0x611afab85d235fbb6d80e6cb2cc24d54b679a8f8",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "8",
"address": "0xa06c240846f4ebd7a6d0d6e1c7b28de6c55b6a6b",
"image": "/media/cf392ca9f7d3f959628c1cd9e42034e3dd7a9e29721963ff780bbd8cae8d0eba7e6254419ba017431c7c3c7eeb1a",
"audioUrl": "/ppp/38fb5c55ae659c16e3d91efc9c71f3bca2c032a8ef8bea139f118a8b10c1b3feddced6e7aceb9b9e86208fb5f66894c3bdb9f457c52de733",
"genres": [
"Electronic",
"Triphop",
"Experimental"
],
"languages": [],
"moods": [],
"regions": [
"The Netherlands"
],
"description": "New 2018 release!\r\nThis is my dark triphop track \"Intuition\". Hope you like it!",
"timeSince": "2 months ago",
"directTipCount": 0,
"directPlayCount": 8,
"releaseDate": "2018-03-08T14:34:09.085Z",
"tx": "0xea2fabd507fb7662b32f3a53a4e5c4162d606ec499b7ca3d69680d6dc5415e96"
},
{
"resourceUrl": "eipfs://QmfDGTj1f5GsGu9sAKuyQvXrEmRV81esu1BNTMnm3x8FwK",
"contentType": "audio/mpeg",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "Mercury in Retrograde",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0xddf44810140a23da826ff95dde5c55e94bd8cbfd",
"artistName": "Jay Stapley",
"totalEarned": "6000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "6",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmVx3uwChtefPD3xwBX5cYvAR1TCkhmmGo2vLKFAJydNmE",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmVi5kZ9TwaaEmvGHw2C5pxTUG7vG5WHCeDHT432rgJY12",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0xddf44810140a23da826ff95dde5c55e94bd8cbfd",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "6",
"address": "0xd4c0ed11f5ee1e0165ba5560697886c8322ba713",
"image": "/media/cf392c86f1e1e86f79a01887c0276ceacc41f479262d41ea456f90fe8db005be734e3747b182335a07422c08b26e",
"audioUrl": "/ppp/38fb5951fb36cb46e2d04cff9f20a7bbf6c665abe9dabb10cc10df8545cbb3acdbc086e0abebccc881718fb5f66894c3bdb9f457c52de738",
"genres": [
"Alt-Rock",
"Americana",
"Blues",
"Ambient",
"Electronica"
],
"languages": [],
"moods": [],
"regions": [
"UK"
],
"description": "ambient electronica guitar chill out",
"timeSince": "5 months ago",
"directTipCount": 5,
"directPlayCount": 6,
"releaseDate": "2017-12-11T23:34:21.623Z",
"tx": "0xc8399c03fae7c622f22b67aad409c37c9bb1aa28c7a8a6e6721fcb965fcb9a7e"
},
{
"resourceUrl": "eipfs://QmcWTcuFztEW7nnvJgTtddyLtFFCaBfbUTJkc19MM7czFz",
"contentType": "audio/mpeg",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "Secret Bandits feat. Selento - Tomorrow",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0xd59621d1eaee75e3fc0c4d05d2e1fad6ccb2b10c",
"artistName": "Secret Bandits",
"totalEarned": "0",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "0",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmagBBpnHP5vUZtApDyXcsXKiJJr7zCcVnraqLcagQkBGw",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmRBxzS44HfYYaS6xFamQWY2oM8TXNRNtck9UhyCnmtvBE",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0xd59621d1eaee75e3fc0c4d05d2e1fad6ccb2b10c",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "0",
"address": "0x3a8054e11a9e8489e2953ec2092d3dbececea7ef",
"image": "/media/cf391b9980d6ef4259844897c5392bd3cb47d51426076fe07e148ecfd1a22bb0624f77508c85167a2a6a2304985c",
"audioUrl": "/ppp/38fb0e04a0369b16b6d01babc320aeeafece36acb28ebd409912d9854097b8feda9dd6b7faecccc8d5248fb5f66894c3bdb9f457c325e53e",
"genres": [
"House"
],
"languages": [
"Future House"
],
"moods": [],
"regions": [
"Spijkenisse"
],
"description": "Download & Stream ' Tomorrow ' by Secret Bandits feat. Selento : fanlink.to/TOMORROW\r\n»»Spotify: spoti.fi/2EJzWDb\r\n»»Google Play :bit.ly/2EvXtr4\r\n»»Beatport : bit.ly/2BJxABi\r\n»»ITunes: apple.co/2E3HJhk\r\nFollow \"DER\" Spotify Playlists: spoti.fi/2ls3bD3\r\nFollow \"DER\" Youtube Playlists: bit.ly/2sZ9dyT\r\nFollow Secret Bandits - \r\n♣@secretbandits\r\n♣www.facebook.com/SecretBandits/\r\nFollow Digital Empire:\r\n»»facebook.com/DigitalEmpireRecords\r\n»»youtube.com/digitalempirerecords\r\n»»twitter.com/DigitalEmpireRe\r\n»»www.digitalempire-records.com\r\n»»instagram.com/digitalempirerecords\r\n»»@digital-empire-records\r\nwww.facebook.com/DigitalEmpireRecords\r\nDelivered by Label Worx: www.label-worx.com on behalf of Digital Empire Records: www.digitalempire-records.com/",
"timeSince": "2 months ago",
"directTipCount": 0,
"directPlayCount": 0,
"releaseDate": "2018-03-06T15:44:52.809Z",
"tx": "0x820cfa90adcd31c44935b9731edee0f7910f78926573287bd64be197ae30eef4"
},
{
"resourceUrl": "eipfs://Qmd258rDsmzu55Hdpp6M1YNDcY8ZeWFeEhuoqEG4hnzjpW",
"contentType": "audio/mp3",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "100",
"totalPending": "0",
"title": "Mr. Jonk - spring snow (Original Mix)",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0x534a8ca24cb6c7465da80280b7fc878120b002c1",
"artistName": "Mr. Jonk",
"totalEarned": "8000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "8",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmYBsCcKzaEBZX9TMj4AHdHZMRz5NZnQEgwuFfcqK9t3xh",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://Qmdp1ebGtjYxTjAtzCERbs1QnFZ9JBaq7vedpUUKSC4w3o",
"tipCount": "0",
"balance": "1",
"contributors": [
{
  "address": "0x534a8ca24cb6c7465da80280b7fc878120b002c1",
  "shares": "100"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "8",
"address": "0x14ff407ea8a7e717d83e755efa165befa0604c73",
"image": "/media/cf3923bcb1d7fc676bb538a3ca3b66c6f669980d0d107ff15a0cbe88a882068271467244bbaf166a06023c75a743",
"audioUrl": "/ppp/38fb0c51fe609a12e4844bf29b72f3e9f7c037a6b8deb910cf458fdd43c5bef8dd9ed4e2afb9999c87718fb5f66894c3bdb9f457c427e33f",
"genres": [
"House",
"techno"
],
"languages": [],
"moods": [],
"regions": [],
"description": "Mr. Jonk - spring snow (Original Mix)",
"timeSince": "1 year ago",
"directTipCount": 2,
"directPlayCount": 8,
"releaseDate": "2017-04-06T06:52:53.561Z",
"tx": "0x463da69a9b46cc40f6f1884bb875ef4e29c7af71eba47baef29b891b3fc7eead"
},
{
"resourceUrl": "eipfs://QmSbAPqqPBbSzSrxBSLKdYdYhPiCXuwG4Gd7s4VaHowtxp",
"contentType": "audio/mp3",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "Butterfly",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0x4558ad92788b7eb7e2bda2e327e6a660b3aea86f",
"artistName": "Cs E",
"totalEarned": "4000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "4",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmRsPLxCAgDZLfujibUF8EwYY9uZVU9vRq73rpAotiAsdf",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmVPMrs47tNULGWmdXgQDUVbvLGnsD6HRFVYc76aUnoQMK",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0x4558ad92788b7eb7e2bda2e327e6a660b3aea86f",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "4",
"address": "0x4f8e6afba463c34bff5a14772c767b2662f8ea92",
"image": "/media/cf39288d92d8e76f50b339bbdc052af8d261f90a7d3140f24e67b1e7b08d51a5665032028fb9347439520935bb4d",
"audioUrl": "/ppp/38fb0903a0639843b5834bfecc76f5edf29535f8bedabf11cd17dbdf45c5bcf88ace83e0ffb1c89e89708fb5f66894c3bdb9f457c02de532",
"genres": [],
"languages": [],
"moods": [],
"regions": [],
"description": "",
"timeSince": "4 months ago",
"directTipCount": 0,
"directPlayCount": 4,
"releaseDate": "2018-01-05T13:34:16.418Z",
"tx": "0xa6ff4b39466adb6ce7dee305d4f6e1b82988e55515453eff41d7175f7d5b6409"
},
{
"resourceUrl": "eipfs://QmQAkvavAujQ6MhaWp31UWcHqXvd5QVuyKbFbMznBmCBgD",
"contentType": "audio/mp3",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "F-FLAT - FUKUSHIMA",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0xf1c1a0338d3c0efcd22496096a034207e49c1d9f",
"artistName": "FRED DOUG",
"totalEarned": "229000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "229",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmZwCAUeNcn8wp4tUJoy4U2VYsfJm7nqN1qJSFUvPfFwRq",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmXqw49YRfzkjbbceQiWyzV6tTtx1wcp4wFfe59cvJtiaQ",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0xf1c1a0338d3c0efcd22496096a034207e49c1d9f",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "229",
"address": "0xf95a7127f0dbc268ae9a233b76be0ed47f27aeeb",
"image": "/media/cf39208981d5ca495fb713d9e7136be6ee49c335712105fd4e2da2f78bef06a27a10747bae8f206d1d5d0e318d5a",
"audioUrl": "/ppp/38fb5b5cad679913e1d64cfa9e27f5ecf0cf32fbb2dabc16c942de8a1096bbffdccc82b4abbecc9ad5208fb5f66894c3bdb9f457c523e83e",
"genres": [
"Hip-Hop"
],
"languages": [],
"moods": [],
"regions": [
"OC California"
],
"description": "Be on the look out for upcoming solo projects + more from FRED DOUG & FLATEARTH \r\n\r\n@the_flatearth (FLATEARTH instagram)\r\n@freddougOC (FRED DOUG twitter)",
"timeSince": "3 months ago",
"directTipCount": 0,
"directPlayCount": 232,
"releaseDate": "2018-01-29T18:31:49.971Z",
"tx": "0x76f3ca7a02e0a4fe276ddc6cd3d829b857b6fb8ca9329a2fd65524a5e8d87dbf"
},
{
"resourceUrl": "eipfs://QmSWHtCvCAFEP188Kf8oiyzvYSE2nTV4ENED97tPNaMpyB",
"contentType": "audio/mp3",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "AW-Star Empire",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "1",
"artistProfileAddress": "0x6e6e2394e7ca9d35681ca8b1fa2dcc86ad834fed",
"artistName": "Alex World",
"totalEarned": "164000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "164",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmRX3XiuTYeNvLM5c6hohcYnwuz7RxyphwSNUDgct4vwmi",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmYMz44f7CDX3Z1ykU4jZ1gWQYT7NPSjctcegLwTWGx67H",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0x6e6e2394e7ca9d35681ca8b1fa2dcc86ad834fed",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "164",
"address": "0x0b486041d04571a3b6ea7af4688c5655d8fd27e9",
"image": "/media/cf3928a6f1ccf659458d18afe62f12a7d835c4232d176ec5602bbe8ab4a011a35c56567fa88d1278390f3e31b242",
"audioUrl": "/ppp/38fb0d07ac3e9812e7d04eface70a1efa7c431a8eedab9449c14df844a90beac8dcdd1eaffed9fc8d57b8fb5f66894c3bdb9f457c52de739",
"genres": [
"Soundtrack",
"Electronic"
],
"languages": [
"Dark army",
"Dark side",
"action",
"cinematic",
"dramatic",
"dynamic",
"extreme",
"film",
"hard",
"heroes",
"heroic",
"intense",
"intro",
"majestic",
"marching",
"melodic",
"movie",
"orchestral",
"powerful",
"rhythmic",
"strings",
"strong",
"symphonic",
"trailer",
"triumphant"
],
"moods": [],
"regions": [
"Kiev",
"Ukraine"
],
"description": "",
"timeSince": "2 months ago",
"directTipCount": 4,
"directPlayCount": 165,
"releaseDate": "2018-02-18T10:55:54.049Z",
"tx": "0x6e63c0640d93bbdf0223e5ddbde18bdddc519ce5cb53439c362f12259b732e71",
"pendingUpdateTxs": {
"titleTx": null,
"imageTx": null,
"metadataTx": "0x5ca4eb21a1bcb75dacec93b1b0331dd6d0e730c3d2a628f6553866a3c5d16079",
"distributionTx": null
}
},
{
"resourceUrl": "eipfs://Qmcm3i2YDhpVpgMn457kfZ2LK696P6JS4DM2sJ6jBFycuM",
"contentType": "audio/mpeg",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "Innavader",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0x0762512e5b3f29bc90f947824099abec3822074c",
"artistName": "ATAH",
"totalEarned": "5000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "5",
"contractVersion": "v0.7",
"imageUrl": "ipfs://Qmbyckoq4yZLBTkMyT1hx7P9yRJSiHSKwpdWgRKHaNsVf9",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmebMUAsUqHL7vFC7GKzUfDaGittdjBY2bPGJJqaDr9YuW",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0x0762512e5b3f29bc90f947824099abec3822074c",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "5",
"address": "0xf9449654ff2892b081e41a05ed06700a8012682a",
"image": "/media/cf391887a1fff05d25ad27add23734dfc2579d243d4367926e0c8eee8f903b98435161669a9b3e532c753b10b912",
"audioUrl": "/ppp/38fb5b5cac329714e6d54cacc87dafeca4c76bafee8fbf44ca158cd842c5bcaa88998de2a8bb9bc782238fb5f66894c3bdb9f457c325e53e",
"genres": [
"Electronic",
"Jazz & Blues",
"Experimental"
],
"languages": [],
"moods": [],
"regions": [],
"description": "",
"timeSince": "4 months ago",
"directTipCount": 0,
"directPlayCount": 5,
"releaseDate": "2017-12-28T20:37:21.084Z",
"tx": "0xc970533a168fa6a88220b21bef27432a9e205c104b8826a3e5b59c0fe250068b"
},
{
"resourceUrl": "eipfs://QmbKFFp6MuXbENWUhS9Tac6Y3GoEdNjruuRMkQ3wUsHKwU",
"contentType": "audio/mp3",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "' Thời gian là thời gian đâu phải thuốc chữa ' (Prod. Midaz Beats) - Crabby",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0x8ab914f89fda643c7739797408501bd02dacfc87",
"artistName": "Crabby aka Lam Tran",
"totalEarned": "54000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "54",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmQTLSGpktwxynU61CPWHVd2dhnc1MUqD7SoEeWRbhnhra",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmZYoBE9atLw3ybtNqEV2psvwwjqSvqPNZzLX6EMZYW6wX",
"tipCount": "0",
"balance": "3",
"contributors": [
{
  "address": "0x8ab914f89fda643c7739797408501bd02dacfc87",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "54",
"address": "0xb7078147b4229796b0de7fc112648a2baf7dd484",
"image": "/media/cf392baa8ec7d85c7aa00a99e90d0aa48a40fc1b0d2253997336aaded7953da27016565eb8ac22492f53262ead4a",
"audioUrl": "/ppp/38fb5f52a8319613e7d648fec877afe9ffc131aeefdeb9439911d88e44c7b3fb8a9ad4b4aeedc9cb88768fb5f66894c3bdb9f457c527e33d",
"genres": [
"Hip-hop & Rap"
],
"languages": [
"VietNam"
],
"moods": [],
"regions": [
"Sai Gon"
],
"description": "Link Souncloud: https://soundcloud.com/crabbyakatranlam/thoi-gian-la-thoi-gian-dau-phai-thuoc-chua-crabby/comment-434202252\r\nLyrics:\r\nAnh đã đi trên phố hàng dặm trong 2 giờ qua \r\nKo đích đến, cũng ko nhớ mình bắt đầu từ khi nào cả \r\nCứ 1 vòng luẩn quẩn, những trăn trở trong anh\r\nVề những chuyện ko thành , dù xấu hổ nhưng thật sự phải nói rời bỏ em là thứ anh ko đành….lòng\r\ncố thử đi cùng em, nhưng lại thành vòng\r\nChợt nhận ra mình khác gì đường tròn đang bao quanh em là tâm\r\nGiữa ta luôn tồn tại khoảng cách , những ánh nhìn lạ lẫm \r\nBởi em đã có người bên cạnh, tay em người ta nắm\r\nKhi em bệnh nó là người qua thăm, anh thì đứng nhìn trong xa xăm\r\nPhát điên tìm cách xoá bỏ hình ảnh em tan biến\r\nNhưng ngạc nhiên là anh làm điều ngược lại dù biết đã lạc duyên \r\nCứ gọi anh thằng điên, khư khư giữ những chuyện cũ đáng phiền chi chẳng biết dù cho người đã sang duyên\r\n.\r\nTim anh loạn nhịp khi ta vô tình chạm mặt chốn đông người \r\nKo gian còn hơn ở nam cực khắc nghiệt, đành lướt qua mau chứ không cười\r\nAnh không thể nhìn thẳng mặt em vì ko muốn mình dằn vặt thêm\r\nLằn ranh xuất hiện, đó là kẻ cạnh em, là mảnh vở tứ tung chuyện tình ta anh đang quét,\r\ncảm giác nghẹn lời khó xử đang xen, nổi day dứt làm khó ngủ lắm nên dù sắp bình minh phòng vẫn sáng đèn \r\nThấm mệt tìm cách thoát khỏi chuyện này bằng nhiều đường\r\nLy café hôm nay anh uống đắng khó tả dù đã cho nhiều đường\r\n.\r\nEm có tin vào định mệnh ko ? Anh thì có. đến cuối cùng kết cục em vẫn ko là định mệnh của anh\r\nKhi cả 2 ko còn chủ động mối quan hệ kết thúc\r\nChính lúc đó ta buông tay\r\nAnh còn nhiều câu hỏi lắm nhưng ngại rồi thôi\r\nNhững lời hẹn thề trao nhau lúc ở bên, yeah a nhớ chứ đâu có quên\r\nAnh ko trách em sao nỡ quên ,câu này của ưng hoàng phúc\r\nTrong chuyện tình này a đã tiến 1 bước nhưng e lại lùi hẳn 99 bước.Đúng là đời đâu thể tính trc\r\nChỉ là anh nhớ em thôi, lỗi ko thuộc về ai cả\r\nThời gian là thứ gì thật kinh khủng, nó trôi nhanh quá, và đôi lúc giống như đảo ngược mình trước quen mà sau lạ\r\nFuck khúc này anh rap ko có vần, cũng k khớp beat, \r\nÝ chết, đáng lẽ từ ngữ bài này phải thơ mộng mà em cũng đâu nghe nên chẳng cần thiết \r\n.\r\nAnh nhớ ngày đầu gặp mặt, em mặc chiếc áo trắng nà \r\nChính giây phút ấy anh đã thầm lặng, mơ tưởng chuyện sao trăng\r\nAnh là kẻ háo thắng, nhiều lần làm em giận ko nói\r\nRồi cảm nhận mình trong thật ngầu đưa em về sau nhiều lần mong mỏi\r\nPhải chi thời gian ko trôi, hay ít nhất chậm lại để anh được cảm nhận thêm\r\nNụ cười ánh dương, giọng nói ngọt tựa đường, đôi bàn tay yêu thương hay những lần tâm sự xuyên màn đêm\r\nkhông biết nỗi nhớ em khi nào dừng đc nữa, nhận ra thời gian là thời gian đâu phải thuốc chữa",
"timeSince": "1 month ago",
"directTipCount": 3,
"directPlayCount": 54,
"releaseDate": "2018-03-26T18:20:17.336Z",
"tx": "0x6d031d9ed8dfd649307073cb095ef304980e136b6cd5c103ea57ba78c87df904",
"markedAsAbuse": true,
"pendingUpdateTxs": {
"titleTx": null,
"imageTx": null,
"metadataTx": null,
"distributionTx": null
}
},
{
"resourceUrl": "eipfs://QmchWJfyTZgmN312oT3Vp6jYoAtP3fn92cGQ5ZvHgB5sNv",
"contentType": "audio/mp3",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "Lerka",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0xffd5b64ea0a4e6cf693e2e7531efaa2665da8754",
"artistName": "Иван Иванов",
"totalEarned": "18000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "18",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmQTAh1kwntnDUxf8kL3xPyUzpRFmD3GVoCKA4D37FK77C",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmRNVqB3dgZXRRuKsBLEfpiY9qUngyftwkUDcoRo9j1BUX",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0xffd5b64ea0a4e6cf693e2e7531efaa2665da8754",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "18",
"address": "0x5b60ce6bbb65ba1ed58c77b66b2cfb877e72c9b8",
"image": "/media/cf392baa83fcae4766ba098fd43627f48368e07f3d244efe6d2e96fb8b9c5b94624e467abcfd31287a7d0371e868",
"audioUrl": "/ppp/38fb0807ae36cd47e58348a8cc70f4bff79237abb3d8b9129816dfde4090edf880cf82b7aebbcec6d27a8fb5f66894c3bdb9f457c325e53e",
"genres": [
"Piano"
],
"languages": [],
"moods": [],
"regions": [],
"timeSince": "1 year ago",
"directTipCount": 0,
"directPlayCount": 17,
"releaseDate": "2017-03-07T19:40:14.210Z",
"tx": "0xa6827b2b1d7a284b02186812aa76ad18d5c17b6f1439e9e5e9cdaad0ceed5e52"
},
{
"resourceUrl": "eipfs://QmP5VyiKJicGYu442Rps7BBQ8yxj531JLUSMjBvaPmGknQ",
"contentType": "audio/mpeg",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "The Sign Is Up",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0x1e2569d1b62ccf360a05c34e3382838e5319bf7b",
"artistName": "Smidi Beats",
"totalEarned": "1000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "1",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmNsXDrZgTS1T9SEm5jVLPoz1YYwJKknrmrHZFdQkmR9jV",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmSj3wkmvmbRDCVesWDUQajfTRvsK5UHaPA1tuJzJk5Ki1",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0x1e2569d1b62ccf360a05c34e3382838e5319bf7b",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "1",
"address": "0x247a71f0cf3f97a5c806e731293f2605aa501cd8",
"image": "/media/cf39348d9ad0ed7676802ed0c45a0cd7d636c61a092458d126079dcaac9303bd464c7779a78f114a26561a7fb57d",
"audioUrl": "/ppp/38fb0f51af679913b5d149acc923afe9a7c230a6bb8deb12c911db854195b9ac88cdd4b3acb99c9cd47a8fb5f66894c3bdb9f457c52de732",
"genres": [
"Hip-hop & Rap",
"R&B & Soul",
"Pop",
"Jazz & Blues",
"Gospel"
],
"languages": [],
"moods": [],
"regions": [
"Ridgeway",
"Virginia USA"
],
"description": "Fast, House, Pop, Upbeat, Disco, DJ, Techno, Energy, Fashion, Style, Runway, Model, Red Carpet, Celebrity, Paparazzi, Lights, Camera, Action, Electro Synths, Deep Bass, House Drums, TV, Film, Radio, Cue Sheet, Video, Youtube, Movie, Soundtrack, Instrumental, Background, Music, Beat, Track.",
"timeSince": "1 month ago",
"directTipCount": 0,
"directPlayCount": 1,
"releaseDate": "2018-03-25T13:19:08.271Z",
"tx": "0x61ba7fc94a21ecf22bcf5b63f61fe7b2726ef6b9f152553578d36ed3b470b7a3"
},
{
"resourceUrl": "eipfs://QmQaQJL7arLF4X1Zjk1uhrpL2FULKL6XVbJsDskk9AmbTn",
"contentType": "audio/mpeg",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "Soul For Gold",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0x7c32c346958f823ab20fc800b9d8d3a1eec01c60",
"artistName": "Markus Stadler",
"totalEarned": "1000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "1",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmXqm6LvTrZRATEcoenyajM37VykE5zV94KGBxYtqux42h",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmXMVmFrwcfdsAJb1qiKpaZWEC5P2TjEwvEpm5t6nKty25",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0x7c32c346958f823ab20fc800b9d8d3a1eec01c60",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "1",
"address": "0x90cb4988fc99f9fec7c1563d783e9c85329fbb81",
"image": "/media/cf39228fafa2d35a45a627b3d1371af1d466c235241e7a982008bdd6a3ed12850d154e76bfb12c6f3c4e3072ed43",
"audioUrl": "/ppp/38fb0455fb649a1bebd94ca9c37cf0e7a09230a9e88abb13c944de844196b2f980cd86e0a0efcf9d88738fb5f66894c3bdb9f457c52de739",
"genres": [
"Rock",
"Country",
"Bluegrass and others"
],
"languages": [
"Country"
],
"moods": [],
"regions": [
"Nashville",
"TN  USA"
],
"description": "A song I co-wrote with Marilyn Barclay and Robbie Melton.\r\nMarilyn Barclay is the singer on this song",
"timeSince": "13 days ago",
"directTipCount": 0,
"directPlayCount": 1,
"releaseDate": "2018-04-19T19:56:21.866Z",
"tx": "0xadeb08c8950bb5c2c2ec3b9e4c8827b5f052a5500939e9a82a3d2fad8010ae01"
},
{
"resourceUrl": "eipfs://Qmaej7ihkhanVKu1aP4zfmsojjjuafs34D7mCNTHhPBvYu",
"contentType": "audio/mpeg",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "Leo Banton - Open your Eyes",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0xc760957257e890ecb0f0ca567a1085d7caf993fb",
"artistName": "Leo Banton",
"totalEarned": "6000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "6",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmR7fvq1vH9h1kiYb2b9oVmKTBLGkZUCKwNnAnGvNZ4DdV",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmUHitoVWLSTLqJLzKdiDyJN7jAXL5tvLieL3scyRJ3MDW",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0xc760957257e890ecb0f0ca567a1085d7caf993fb",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "6",
"address": "0xe59fb5ade79e5780d71402f718cbc8d7faf0ab0c",
"image": "/media/cf3928c9a4e2ee1d679c4489a10836cbd931ce752a225ae0431c88fa8d823d907f564b5fbca7326d03617c02bb7d",
"audioUrl": "/ppp/38fb5850a160cc17b2854ffdc320a3e9fec737a9ba8fbe179c17d8841191e8a2dccfd3b3ffb9cc9d80218fb5f66894c3bdb9f457c52de738",
"genres": [
"Reggae"
],
"languages": [],
"moods": [],
"regions": [
"France"
],
"description": "Open Your Eyes Riddim\r\nprod33480\r\nMusic & lyrics by Léo Sourisse\r\n\r\nhttp://leobanton.bandcamp.com/track/leo-banton-open-your-eyes",
"timeSince": "3 days ago",
"directTipCount": 0,
"directPlayCount": 6,
"releaseDate": "2018-04-29T16:20:33.494Z",
"tx": "0x63eee82742a3548befddfe6ce0e9a2c24546758e34693f66e51db136d89fdc40"
},
{
"resourceUrl": "eipfs://QmZgek892A6tSF8jnGU6JUJg9uSSFk72GVGKuLvK86WZR5",
"contentType": "audio/mp3",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "Climate yacht",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0x7d75681a5efdf89924dd448ef4f554daf10ce1d7",
"artistName": "Buffalo Traffic",
"totalEarned": "5000000000000000000",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "5",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmcjyqdgFpTAuwyXF6DgvP9LLM7BEnrrLbhDrmGDobR13B",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmeswZgbFnM7ygNJWDAKUgao2AJvjsJn4g8dfixyBgaeDS",
"tipCount": "0",
"balance": "0",
"contributors": [
{
  "address": "0x7d75681a5efdf89924dd448ef4f554daf10ce1d7",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "5",
"address": "0x287945c09611b9bbfbe74a5c9c7585b0068a734f",
"image": "/media/cf391994bbe5fb4b57a429a0e51426cafd35e82b33240ee75b13f3ffa3b61aa178436d758fa4325f22591a77ec69",
"audioUrl": "/ppp/38fb0f5daf3f9a17b0d113fccb74f4e7a49535fcee8cba44cf43d0df45c6b3afdac885e4a1e89acc84248fb5f66894c3bdb9f457c523e83e",
"genres": [
"Alternative Rock"
],
"languages": [],
"moods": [],
"regions": [
"Santa Rosa California."
],
"description": "About global warming",
"timeSince": "4 months ago",
"directTipCount": 0,
"directPlayCount": 5,
"releaseDate": "2017-12-19T10:31:30.357Z",
"tx": "0x61e32d6988d17dcf35ab792da0e0dceadc6c82a5a9c41ac45ce2652a3f09d574"
},
{
"resourceUrl": "eipfs://QmeYk6wbhFee4oosRgCvzSo2vFBvPpwDcA45yRrLPVsdcA",
"contentType": "audio/mp3",
"createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"totalShares": "1",
"totalPending": "0",
"title": "Mtech - Life in box",
"getContributorsLength": "1",
"licenseVersion": "1",
"metadataVersion": "0",
"artistProfileAddress": "0x803036cb0f79c525a66a671a87c9bc9c0507b6bd",
"artistName": "Mtech",
"totalEarned": "1.902e+21",
"owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
"playCount": "1902",
"contractVersion": "v0.7",
"imageUrl": "ipfs://QmZ7myL2CrLjjqHwJW3McPYVAGtYg84sSbeGecEkKUbm5r",
"weiPerPlay": "1000000000000000000",
"totalTipped": "0",
"metadataUrl": "ipfs://QmXTB7XVghvvRYzHbKnDbrJb4pC3EotDDzVMi41qkcQiVi",
"tipCount": "0",
"balance": "10",
"contributors": [
{
  "address": "0x803036cb0f79c525a66a671a87c9bc9c0507b6bd",
  "shares": "1"
}
],
"royalties": [],
"coinsPerPlay": "1",
"totalEarnedCoins": "1902",
"address": "0x509c00b8b2ca41be0ac0e39a22fc4748d089fec9",
"image": "/media/cf3920c9afedd31e52a6318bfa1217e5f1549f0126246efd5619b0e481e05ca06743607698aa3070066e2a2bea59",
"audioUrl": "/ppp/38fb0855a1659e12b1d948f89924a2efa49263ffe88beb16c341db8e1490bfad8cc0d1e2a1b0cb9ad37b8fb5f66894c3bdb9f457c527e33e",
"genres": [
"Techno",
"Hard-Techno"
],
"languages": [],
"moods": [],
"regions": [],
"description": "",
"timeSince": "10 months ago",
"directTipCount": 10,
"directPlayCount": 1902,
"releaseDate": "2017-06-23T19:26:43.929Z",
"tx": "0x053b8894925a0e5136af88e0e5d14181abef6c005dafb26d49dd04f28acd89bc"
}
]
					`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="https://musicoin.org/json-api/tracks/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f/votes">
				<pre>
					<code>
						{`
{
  "up": 7,
  "down": 0
}
					`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="https://musicoin.org/json-api/profile/0xa41f0291b4466c28f4430512492cd9a06fb76b2c">
				<pre>
					<code>
						{`
{
  "artist": {
    "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "forwardingAddress": "0x0000000000000000000000000000000000000000",
    "descriptionUrl": "ipfs://QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH",
    "artistName": "VG",
    "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
    "contractVersion": "v0.3",
    "imageUrl": "ipfs://QmR8mmsMn9TUdJiA6Ja3SYcQ4ckBdky1v5KGRimC7LkhGF",
    "followers": "0",
    "socialUrl": "ipfs://QmbJWAESqCsf4RFCqEY7jecCashj8usXiyDNfKtZCwwzGb",
    "tipTotal": "0",
    "tipCount": "0",
    "balance": "1",
    "image": "/media/cf3928c6aff9ec617fed29b4f42936d38d49cd7f162d54fa233dafff82b311e242144e76afa018587a77232e986d",
    "social": {
      "twitter": "https://twitter.com/DEMONdione"
    },
    "description": "",
    "profileAddress": "0xa41f0291b4466c28f4430512492cd9a06fb76b2c",
    "timeSince": "10 months ago",
    "genres": [],
    "directTipCount": 0,
    "followerCount": 2,
    "verified": false,
    "id": "594c2afa9e98ec1e94596fff"
  },
  "releases": [
    {
      "resourceUrl": "eipfs://QmbRmXJhPsG1u29LeeJ1qfNPksj6SMMDonLCaHSHkdDCrc",
      "contentType": "audio/mpeg",
      "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
      "totalShares": "1",
      "totalPending": "0",
      "title": "TEST1",
      "getContributorsLength": "1",
      "licenseVersion": "1",
      "metadataVersion": "0",
      "artistProfileAddress": "0xa41f0291b4466c28f4430512492cd9a06fb76b2c",
      "artistName": "VG",
      "totalEarned": "2000000000000000000",
      "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
      "playCount": "2",
      "contractVersion": "v0.7",
      "imageUrl": "ipfs://QmRsPLxCAgDZLfujibUF8EwYY9uZVU9vRq73rpAotiAsdf",
      "weiPerPlay": "1000000000000000000",
      "totalTipped": "0",
      "metadataUrl": "ipfs://QmT5tG8UTM6YCjV2n9aZx41xyh6ohf3qR7QQU76dDRWvP6",
      "tipCount": "0",
      "balance": "0",
      "contributors": [
        {
          "address": "0xa41f0291b4466c28f4430512492cd9a06fb76b2c",
          "shares": "1"
        }
      ],
      "royalties": [],
      "coinsPerPlay": "1",
      "totalEarnedCoins": "2",
      "address": "0xb5a27707512f7f62aa6cf5119b3666fcf0941dae",
      "image": "/media/cf39288d92d8e76f50b339bbdc052af8d261f90a7d3140f24e67b1e7b08d51a5665032028fb9347439520935bb4d",
      "audioUrl": "/ppp/38fb5f50f9349915e3d61ffbc823a1b8f0c532ffbdd8e810cb11d0de41c5bdacde9bd3e2a0bd9c9bd1278fb5f66894c3bdb9f553c220e93d",
      "genres": [
        "Rock"
      ],
      "languages": [],
      "moods": [],
      "regions": [],
      "description": "",
      "timeSince": "9 months ago",
      "directTipCount": 0,
      "directPlayCount": 2,
      "releaseDate": "2017-08-07T17:14:52.971Z",
      "tx": "0xb328870c116fc093faaaba59418aa664bb602b046f9ca959bcf56612d6afc097"
    },
    {
      "resourceUrl": "eipfs://QmTjPmBT6Nxw6ijpVRK54g3NkUQSVsAZemdeYpTHfTvzcj",
      "contentType": "audio/mpeg",
      "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
      "totalShares": "1",
      "totalPending": "0",
      "title": "DELETE ",
      "getContributorsLength": "1",
      "licenseVersion": "1",
      "metadataVersion": "0",
      "artistProfileAddress": "0xa41f0291b4466c28f4430512492cd9a06fb76b2c",
      "artistName": "VG",
      "totalEarned": "1000000000000000000",
      "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
      "playCount": "1",
      "contractVersion": "v0.7",
      "imageUrl": "ipfs://QmRsPLxCAgDZLfujibUF8EwYY9uZVU9vRq73rpAotiAsdf",
      "weiPerPlay": "1000000000000000000",
      "totalTipped": "0",
      "metadataUrl": "ipfs://QmT5tG8UTM6YCjV2n9aZx41xyh6ohf3qR7QQU76dDRWvP6",
      "tipCount": "0",
      "balance": "0",
      "contributors": [
        {
          "address": "0xa41f0291b4466c28f4430512492cd9a06fb76b2c",
          "shares": "1"
        }
      ],
      "royalties": [],
      "coinsPerPlay": "1",
      "totalEarnedCoins": "1",
      "address": "0x52f911d8b78dfd8d2e120beef8abf1755fc8c9c0",
      "image": "/media/cf39288d92d8e76f50b339bbdc052af8d261f90a7d3140f24e67b1e7b08d51a5665032028fb9347439520935bb4d",
      "audioUrl": "/ppp/38fb0857fe3f9f13b7d948fdc221f0bafe9361fbba89be479f458f841391edab8fcd80b4fab1cec6d3728fb5f66894c3bdb9f553c220e93c",
      "genres": [
        "Rock"
      ],
      "languages": [],
      "moods": [],
      "regions": [],
      "description": "DELETE THIS FILE!!!",
      "timeSince": "9 months ago",
      "directTipCount": 0,
      "directPlayCount": 1,
      "releaseDate": "2017-08-07T12:40:25.385Z",
      "tx": "0xd31fb98e31f2569498b35274397daec1a1da98fd29eee93ea93a49d0a001f7ff"
    },
    {
      "resourceUrl": "eipfs://QmREXjLyYUPFnhbmcox8ARhfAt1w1L1FFStjZ4sUCMBFxZ",
      "contentType": "audio/mpeg",
      "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
      "totalShares": "1",
      "totalPending": "0",
      "title": "Tests",
      "getContributorsLength": "1",
      "licenseVersion": "1",
      "metadataVersion": "0",
      "artistProfileAddress": "0xa41f0291b4466c28f4430512492cd9a06fb76b2c",
      "artistName": "VG",
      "totalEarned": "1000000000000000000",
      "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
      "playCount": "1",
      "contractVersion": "v0.7",
      "imageUrl": "ipfs://QmRsPLxCAgDZLfujibUF8EwYY9uZVU9vRq73rpAotiAsdf",
      "weiPerPlay": "1000000000000000000",
      "totalTipped": "0",
      "metadataUrl": "ipfs://QmPpXUJGRH9kGKpTj4rdhVFDKvYVtzKMQzEAtuQhQajtX8",
      "tipCount": "0",
      "balance": "0",
      "contributors": [
        {
          "address": "0xa41f0291b4466c28f4430512492cd9a06fb76b2c",
          "shares": "1"
        }
      ],
      "royalties": [],
      "coinsPerPlay": "1",
      "totalEarnedCoins": "1",
      "address": "0x50f3fae0dded1bafd470e17bf7316ef56f9f0833",
      "image": "/media/cf39288d92d8e76f50b339bbdc052af8d261f90a7d3140f24e67b1e7b08d51a5665032028fb9347439520935bb4d",
      "audioUrl": "/ppp/38fb0855fe35c843b6d14eae9f21a7bca79137aabc8beb14cd428f8b41c2bdffdecd83b4a0ef9dc783718fb5f66894c3bdb9f553c220e93d",
      "genres": [
        "Dev"
      ],
      "languages": [],
      "moods": [],
      "regions": [],
      "description": "Dev test",
      "timeSince": "9 months ago",
      "directTipCount": 0,
      "directPlayCount": 1,
      "releaseDate": "2017-07-30T15:50:18.448Z",
      "tx": "0xe90c7c3fd7be0e17b4aada23915bf6f8b7a715e20927341322497f1cae05eeaa"
    },
    {
      "resourceUrl": "eipfs://QmW479Ln2sFAnN3VnoguiaZjZxpFtXeUbaur81jqVRkHZ6",
      "contentType": "audio/mpeg",
      "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
      "totalShares": "100",
      "totalPending": "0",
      "title": "Test",
      "getContributorsLength": "1",
      "licenseVersion": "1",
      "metadataVersion": "0",
      "artistProfileAddress": "0xa41f0291b4466c28f4430512492cd9a06fb76b2c",
      "artistName": "VG",
      "totalEarned": "1000000000000000000",
      "owner": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
      "playCount": "1",
      "contractVersion": "v0.7",
      "imageUrl": "ipfs://Qmbz86jC8mcTT3cr1Pha5qcUrA29SMyiWd4BDk3rVzkA8p",
      "weiPerPlay": "1000000000000000000",
      "totalTipped": "0",
      "metadataUrl": "ipfs://QmWQ4UrZscBVwiFDLYkN4Dr8nWUBYtMsiSZwv8GtHLsjJ1",
      "tipCount": "0",
      "balance": "0",
      "contributors": [
        {
          "address": "0xa41f0291b4466c28f4430512492cd9a06fb76b2c",
          "shares": "100"
        }
      ],
      "royalties": [],
      "coinsPerPlay": "1",
      "totalEarnedCoins": "1",
      "address": "0x2f2cde96eba06c48fa6b697a2197377ed3aeb666",
      "image": "/media/cf391884faa2f56f29b91eb5c4503ce08a53c42d700554fe651ff684b59511ba63453173b9a246691b412307e75b",
      "audioUrl": "/ppp/38fb0f03aa65ca47ead74fa89b75a0bdf2cf35ffbdd9b81ccd41db8d4bc4b8ad8f9dd1e1f8eccfc986748fb5f66894c3bdb9f553c220e93d",
      "genres": [
        "Rock"
      ],
      "languages": [
        "English"
      ],
      "moods": [],
      "regions": [],
      "description": "Beep sound",
      "timeSince": "10 months ago",
      "directTipCount": 0,
      "directPlayCount": 1,
      "releaseDate": "2017-06-29T05:22:18.672Z",
      "tx": "0xd932012cd81da156790983e2ec6e514cb2a5d05b67f2d6d8588f118944a30404"
    }
  ],
  "pendingReleases": []
}					`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="https://musicoin.org/json-api/tx/status/0xf4141403ec4c322a4c98291ff5cbc342faf0078cf5a36852ef521463b3f92aef">
				<pre>
					<code>
						{`
{
  "status": "complete",
  "receipt": {
    "blockHash": "0xfcbcee9ac6f5005a1799284f283b73a649867796570f786b948295d9f38c8127",
    "blockNumber": 2419537,
    "contractAddress": null,
    "cumulativeGasUsed": 21000,
    "from": "0x456d9aa89599802fb84fc6e7ca5aeb4581211075",
    "gasUsed": 21000,
    "logs": [],
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "status": "0x1",
    "to": "0x9d6b2fa051d71b0e78b00b37406de5b4f5fec18e",
    "transactionHash": "0xf4141403ec4c322a4c98291ff5cbc342faf0078cf5a36852ef521463b3f92aef",
    "transactionIndex": 0
  }
}
					`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="https://musicoin.orgjson-api/tx/history/:address">
				<pre>
					<code>
						{`
<readacted>
					`}
					</code>
				</pre>
			</MoreInfo>
			<MoreInfo title="https://musicoin.org/json-api/tracks/search">
				<pre>
					<code>
						{`
[
  {
    "artistName": "Amaray ",
    "genres": [
      "Other"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "timeSince": "1 year ago",
    "directTipCount": 138094,
    "directPlayCount": 2214,
    "artistProfileAddress": "0x0f8df2e0f5d302407e56e17b81051f03dc4767d4",
    "title": "Woman Don't Cry ",
    "image": "/media/cf392baa83fcae4766ba098fd43627f48368e07f3d244efe6d2e96fb8b9c5b94624e467abcfd31287a7d0371e868",
    "address": "0x83730788de5b08c7c6993f9beca714f340216fcf",
    "tx": "0xfba8576b0831268feba6b790dc799f6adade1e5f452ca7cdd85971c20a86512b",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "Anastace",
    "genres": [
      "Other"
    ],
    "languages": [
      "English"
    ],
    "moods": [],
    "regions": [
      "Toronto",
      "ON"
    ],
    "description": "Soaring electro pop to take you somewhere far, far away...",
    "timeSince": "11 months ago",
    "directTipCount": 2928,
    "directPlayCount": 1364,
    "artistProfileAddress": "0x7072cbaa6b975896a1de07fa9fe5259471ef6cd3",
    "title": "Parachute",
    "image": "/media/cf39209791fca74d62e131d8e32b1ba5d55ac21f273653f37f0989ea8de911b9027b347fa990364f3f683231bc63",
    "address": "0x69ce8c1d3d9c37197662bb62bd7455ec94a5ce90",
    "tx": "0x16520731fb2d917ee799d84229756dc4246fab606f82ffee10a8183a65ac24a0",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "DOS OR DIE RECORDS",
    "genres": [
      "Other"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "description": "",
    "timeSince": "2 months ago",
    "directTipCount": 2008,
    "directPlayCount": 199,
    "artistProfileAddress": "0xd9902fbd560115abb27c8e30b6058a65f34c7a4c",
    "title": "Tomb - Brruh (Original Mix)",
    "image": "/media/cf3922a7f7f3fb1d50861a88e20b05f5fc6df429011a74fd663590ec87963b9071407357cca70762387a11159a13",
    "address": "0x21d213964a9b944ef1fb6d2ff1102d68e3f78fa9",
    "tx": "0xbd6688f61ce98daa8a0226a7ef7472114f3ba282a1ec0bec2c1c437390e4b7e9",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "KRISG184",
    "genres": [
      "Electronic"
    ],
    "languages": [
      "JAZZ",
      "Instrumental",
      "English"
    ],
    "moods": [],
    "regions": [],
    "description": "TIME TO FLY TAKE 2 - KRISG184 - FT. KRIS T REEDER ###RE-RELEASE###",
    "timeSince": "4 months ago",
    "directTipCount": 6475,
    "directPlayCount": 268,
    "artistProfileAddress": "0x8e8bba22679ffb211c28f33834199812279962f2",
    "title": "TIME TO FLY TAKE 2 - KRISG184 - FT. KRIS T REEDER",
    "image": "/media/cf392eb8abd3f74b20ec0bd8c43129deda60c614160346ed6d09b68faeaa0ab85363705f889f464227410408ea5b",
    "address": "0x9bb6a64a3785309b1ab0c7e53ad18d74f022acfa",
    "tx": "0x316ac5487c42b66107f1b4b9a97faf6b1c292f10fe628b9daac8a36335495e94",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "KRISG184",
    "genres": [
      "Electronic"
    ],
    "languages": [
      "Instrumental"
    ],
    "moods": [],
    "regions": [],
    "description": "DANCE ONE - KRISG184",
    "timeSince": "3 months ago",
    "directTipCount": 3142,
    "directPlayCount": 256,
    "artistProfileAddress": "0x8e8bba22679ffb211c28f33834199812279962f2",
    "title": "DANCE ONE - KRISG184",
    "image": "/media/cf392f8ef5d5ab6b5db72d83e02126a4f3749804131a7ad2473af3dfd09306a702574d5ac9a621712b627c70eb4d",
    "address": "0x0aef23b980688fd2d23479c3d6869fd2e000b807",
    "tx": "0x0fd3550c89f16d3a321c5039e5df547150e1263287d1c3fb7166f0b7bb645e4f",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "KRISG184",
    "genres": [
      "Electronic"
    ],
    "languages": [],
    "moods": [],
    "regions": [],
    "description": "PRESS ENTER - KRISG184 ###EXCLUSIVE MUSICOIN RELEASE###",
    "timeSince": "4 months ago",
    "directTipCount": 2487,
    "directPlayCount": 209,
    "artistProfileAddress": "0x8e8bba22679ffb211c28f33834199812279962f2",
    "title": "PRESS ENTER - KRISG184 ###EXCLUSIVE MUSICOIN RELEASE###",
    "image": "/media/cf392ab498a3d8455fb04e83c42737e4835bd50d314643cc40668ff597e91d995f6c6265cfb9012d2c4a703caf4f",
    "address": "0x15d27c5f4dfe016998b7c73129e012e22b739a41",
    "tx": "0xc7c2774e8443c685d0320d1b1b89cc5ce1f6ead376cceef83295f5e1673a9dd9",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "niuQuin",
    "genres": [
      "Electronic"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Global",
      "Universal Sound"
    ],
    "description": "A full joy like birds flying\r\nThank you birds for the great past year, lets start the dogs now.\r\nVoice by Galiana Lacabanne\r\nBajo y otros Dr. Rascovan\r\nDigital Brothers.\r\nEnjoy!!!!",
    "timeSince": "3 months ago",
    "directTipCount": 2281,
    "directPlayCount": 280,
    "artistProfileAddress": "0x9e85136e204d19592681da80241e56d23322488a",
    "title": "BirdsJoy 鸟喜悦 (Only in Musicoin)",
    "image": "/media/cf391bc99afcd95567e033a5fd2d1bd9e266da2a7c0465d24e338885b2be30bc574e60638abf30413c4b12128e65",
    "address": "0x7d1c868dc4793071359fea379439a4a8de47948a",
    "tx": "0x1ec66443869ac68ec9b93f45e806ec133d8442e243eb3eb353f69af4f52dc0a3",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "D.O.N.S.",
    "genres": [
      "Electronic"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "London",
      "UK"
    ],
    "description": "Sugarman - Me & Mrs. Brown Album",
    "timeSince": "3 months ago",
    "directTipCount": 2110,
    "directPlayCount": 226,
    "artistProfileAddress": "0x9169b40478b42a9184748a1b09d6081442b91fc1",
    "title": "Sugarman - Urban Lounge",
    "image": "/media/cf391f88adc6f7475b932999e1161cc3f37ac7292b4d709c4f14f1e8d28106ab6c62520593ff3d5e3778121f9873",
    "address": "0xb707dd864d4b33b2f8d1bbba6aca675c9cdd0ff6",
    "tx": "0x1b7bc56c3bb4edbf575273a95052a47f37473d37684b2703bd5cf4a7c9760fc6",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "The Maniac Agenda",
    "genres": [
      "Metal"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Philadelphia"
    ],
    "description": "Flooded is the debut single from our EP \"Through Fire and Flood\"",
    "timeSince": "2 months ago",
    "directTipCount": 5331,
    "directPlayCount": 1919,
    "artistProfileAddress": "0xd276489463d3f3719a99090268ca7fd96edb813e",
    "title": "Flooded",
    "image": "/media/cf39188fa1a2f66e7cb51a84a90409a6cd4dc134070101932e34a5e988ad38e464664e41ae880068357e2a75b073",
    "address": "0xc242930a11a808dcd54f55bb193ac650df2bc544",
    "tx": "0x0ca23b960a24fae1431f4ae0cbb488100e5bb41f041cc5906d58b19d280d91a0",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "The Maniac Agenda",
    "genres": [
      "Metal"
    ],
    "languages": [
      "English",
      "Philadelphia",
      "Music for Gamers",
      "Music to have sex too"
    ],
    "moods": [],
    "regions": [
      "Philadelphia"
    ],
    "description": "Dissolve into the dark twisted mind that is The Maniac Agenda. If you like our sounds visit us: http://www.maniacmusic.net",
    "timeSince": "4 months ago",
    "directTipCount": 4947,
    "directPlayCount": 1521,
    "artistProfileAddress": "0xd276489463d3f3719a99090268ca7fd96edb813e",
    "title": "Dissolve",
    "image": "/media/cf39188fa1a2f66e7cb51a84a90409a6cd4dc134070101932e34a5e988ad38e464664e41ae880068357e2a75b073",
    "address": "0x9681c1aa03ed78c7dc5225a5e33a1de981a96ab8",
    "tx": "0x20fb97975fe77f6d100ff7e57f30523a5d21e900c9386980348a912ff48fd4a9",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "Figure of Speech aka Jay Woo",
    "genres": [
      "Hip-hop & Rap"
    ],
    "languages": [
      "NJ"
    ],
    "moods": [],
    "regions": [
      "Philadelphia/ South NJ"
    ],
    "description": "Deep Track... You can lead a horse to water but cant make him drink.. feel me?",
    "timeSince": "27 days ago",
    "directTipCount": 5238,
    "directPlayCount": 1222,
    "artistProfileAddress": "0xf2365644163cb8a497441c441fa87c1a3310a093",
    "title": "Lead The Horse To Water",
    "image": "/media/cf3920caade7c64e60a62989ca572bd5c16df91e35467fc4672aad8bdfad24866c57604785a0074101091914b444",
    "address": "0x43310af285bd4c81c9bbf93e4c77751f7b397c1e",
    "tx": "0x38e77677d827a79b43fe92a7330ffe97ca288702933eae2a7831082355b84adb",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "Veronica Cooper",
    "genres": [
      "Hip-hop & Rap"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Las Vegas",
      "NV"
    ],
    "description": "Track 13 from Veronica Cooper's Wheres Vee Mixtape",
    "timeSince": "6 months ago",
    "directTipCount": 2570,
    "directPlayCount": 1143,
    "artistProfileAddress": "0x55ab30f28beb6f232aa0813c6d13b54584d0fad1",
    "title": "Shame",
    "image": "/media/cf3923968ff0ad5f698e398ca35a18d58e62c909341353f2511cb2ea92a82da644637173b8a80d4d190f0514874d",
    "address": "0xdca5fb85e818005377f61bb5c355a599d0c15122",
    "tx": "0x8480b2e8349eaa46940ad31279d929e8fe051811ca06eb33d4bb88773ed8cee2",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "Heather Sullivan",
    "genres": [
      "Pop"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Seattle",
      "WA"
    ],
    "description": "A song written while I was living in LA, just trying to make it.  Uplifting and self encouraging.",
    "timeSince": "7 months ago",
    "directTipCount": 3026,
    "directPlayCount": 991,
    "artistProfileAddress": "0x00a8480779b9c5facc2e20fce55d20f7094915fd",
    "title": "Butterfly",
    "image": "/media/cf3920b588e0fb677ca5448be73727fcfc76c22172197be0266df0c490ab3de2674e3c06b7834062184a0921bb66",
    "address": "0x2b423f5d201f70241137e1e0eaccf5062b4a718e",
    "tx": "0x199d80f3b32a89125a08e5eae361bbaca5228bd4f98e12859702ae2828bb83a3",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "The Taihg Foundation",
    "genres": [
      "Pop"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Canterbury",
      "United Kingdom"
    ],
    "description": "",
    "timeSince": "3 months ago",
    "directTipCount": 2798,
    "directPlayCount": 530,
    "artistProfileAddress": "0x4f0ccf140191f4a8e10b0cab2bebe66880d2ac0f",
    "title": "Taihg Foundation Ambient",
    "image": "/media/cf392f8d88d1c61e44e11cd2d50739fc8d79ef0004427fe7620ef6dcbfb012e44d78427590bf3d4f2c532e12ab42",
    "address": "0x90ab8790ee0da5fccd3c2e26d6d526e64f90253d",
    "tx": "0x9fa75eb3f153be92d146324e75017f1955e678d7e0e13ba1ee687c2600b4779f",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "Anastace",
    "genres": [
      "Rock"
    ],
    "languages": [
      "English"
    ],
    "moods": [],
    "regions": [
      "Toronto",
      "ON"
    ],
    "description": "Open road music just for summer.",
    "timeSince": "11 months ago",
    "directTipCount": 2716,
    "directPlayCount": 895,
    "artistProfileAddress": "0x7072cbaa6b975896a1de07fa9fe5259471ef6cd3",
    "title": "Drive On",
    "image": "/media/cf391f9cb1c2c67855e61e84a7160be6fe57cf1d1d1376c04204a3f5a2a95ba25a584400c9f007433a7e7e328b68",
    "address": "0xfcb0cd3e5a7dd5e349f75904bdf66df64c9ee328",
    "tx": "0x3fc452344d43f6590cada7cefc7048a8c2a04191e8377ca5f9449b31382564ad",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "Kubb_",
    "genres": [
      "House"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "tipperary",
      "Ireland"
    ],
    "description": "B.2 Moonview Into Blue EP",
    "timeSince": "9 days ago",
    "directTipCount": 2715,
    "directPlayCount": 78,
    "artistProfileAddress": "0xcd03bb92f66cc8f293f2fde69303397cf32c3c52",
    "title": "Moonview",
    "image": "/media/cf3920a8fbdeec464b8408b9c71a2dd8d857eb0a710647e840139de5808d5aa65e425d0094a007762e733f22b663",
    "address": "0x0c51e54a316a4cc33b492ec83964badc4aa6a295",
    "tx": "0x85cc3d6bd38f874aad62d813518e90734a00d316b4dff237d65df112a43cee97",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "vizualye",
    "genres": [
      "R&B & Soul"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Virginia"
    ],
    "description": "This track represents a array of instrumental sounds such as bass, guitar, piano, over indie sounds, vocal alternative with a blender of hip hip and R&B to create a energetic smooth sound within the essence of indie music",
    "timeSince": "2 months ago",
    "directTipCount": 2238,
    "directPlayCount": 228,
    "artistProfileAddress": "0x39c86983a66def9f16d6b5a0d44af3c7d1ce6682",
    "title": "Hero's feat BetaPSI (prod by BetaPSI)",
    "image": "/media/cf3923968fc7ea5f5f9235abe4002dd48956d806231c02d8751393fa81b73be052496c759cba32732a6d3d149e5d",
    "address": "0xd90c31b092ac75ba87d0366dda4242d2917901d7",
    "tx": "0x3a91772b6882d221d63aecdaffc910886e7b1d768e576a5baaaa158869d07714",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "Fuzz Heady",
    "genres": [
      "Ambient"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "Outerspace"
    ],
    "description": "Heady Instrumental that will get your head knodding and 3rd eye opening.... Enjoy - Fuzzheady",
    "timeSince": "2 months ago",
    "directTipCount": 2009,
    "directPlayCount": 1400,
    "artistProfileAddress": "0x4a4c94e6bf3e8ca23e28b7cb3e21540a9a2bd8ff",
    "title": "The Rocketman Dela Effect",
    "image": "/media/cf3923b6fac2ea75638e13bbe5132ef68e5ad909350160c97a6cb4e893ee05877e18547fa788007c2051292d8f18",
    "address": "0x99cb67f3a1c07b1048dbf2557106798055f0b92c",
    "tx": "0x5afd9090726abf17f1155756a6cefbfc7cac919ec54f33bc4cd389fbd8b9d123",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "Naughty Professor",
    "genres": [
      "Alternative Rock"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "United States"
    ],
    "description": "Recorded in New Orleans, LA at The Music Shed",
    "timeSince": "5 months ago",
    "directTipCount": 1998,
    "directPlayCount": 950,
    "artistProfileAddress": "0x7c74d22d2a4f8bc2f6448d5091ac8419fe30a78c",
    "title": "Stray - feat. David Shaw",
    "image": "/media/cf392faff6fadb6459b90a88fe0b2df7c267df2f094c76ed516cbeed948807ba515171069f8f1f490b56037fb57e",
    "address": "0x153bc784a79f7f9bca3df9ba0e3ede2fd1637dc7",
    "tx": "0x45113900740bc66520cd7306529b864145a5854beb742a44e4449382c7c85e99",
    "artist": {
      "artistName": "",
      "image": ""
    }
  },
  {
    "artistName": "Empire of Lights",
    "genres": [
      "Indie"
    ],
    "languages": [],
    "moods": [],
    "regions": [
      "United Kingdom"
    ],
    "description": "Whatever I do, I'll regret it later",
    "timeSince": "2 months ago",
    "directTipCount": 1772,
    "directPlayCount": 915,
    "artistProfileAddress": "0x41ee3877c91c144f82a8626547f5174b084a0c85",
    "title": "Regret It Later",
    "image": "/media/cf392fa790a2e65929a305b3a41719a1d337f6297c03059f6106bef6859619b45d51685fbefc1653075d1027aa45",
    "address": "0xe3d8a4d4fb51bf63db94a6af3839ba032d0253df",
    "tx": "0xc3a35cd222bd2dab9aba560b1b45c4e3cf9b0cd893d182b53fde82f5eb48cc0b",
    "artist": {
      "artistName": "",
      "image": ""
    }
  }
]
							`}
					</code>
				</pre>
			</MoreInfo>
		</Section>
	</Fragment>
);
