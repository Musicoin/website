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
			<MoreInfo title="/artist/profile/0xa41f0291b4466c28f4430512492cd9a06fb76b2c">
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
			<MoreInfo title="/license/detail/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f">
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
			<MoreInfo title="/license/ppp/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f">
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
		</Section>
	</Fragment>
);
