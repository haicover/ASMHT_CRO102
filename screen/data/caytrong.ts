const caytrongData = [
  {
    id: '1',
    name: 'Spider Plant',
    image:
      'https://s3-alpha-sig.figma.com/img/8dc1/c3fd/4c79faa42e885c9a92c6e6b29666fdf3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R3hRhYgeT~A52fJi-s68Fa9LdiEctSXLm0ZeLNsMakZoC4qXMWzpq-CEVx5IPjaQQKhfCQyLR4SrUi77AweADIRTjsQnfZFMbTFUZK0WGFpeigKoaFJCj3nDUR1RIABNtE-fS29DXXx7PiSJOAkQZim1Xa2UtwFy2ugCACStlFH1nSH555c37SvVh4ktfcqhPt9f0cUgetDLPgZJ9Fn~XWIP4Zlas70sqiAT7fV7Rwj6SYNtEZfV1OwqBygJ2PMPkssJwStbN1RCkB3XXojK8MMUP7s19gPZV~bJjlowsHfcfnXg5pJkEfyjSR67OoZJ9~dI6lyk5jScvxihq8KWuw__',
    price: '250000',
    category: 'Cây trồng',
    type: 'Ưa bóng',
    remaining: '10sp',
  },
  {
    id: '2',
    name: 'Song of India',
    image:
      'https://s3-alpha-sig.figma.com/img/28d9/bffb/22f7b1d90b3a956129c0034bc73180a5?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N1wcQSLK9FWuQ5xCatNZPkbSqnVKnpGE~LexvJ7yI60LVbUxEbze5UF2IbBvuqpUxDIhG6sQfgqoP4hu4wsM3uv3fgAC7aZ1i4v-m1uJHwBVDKz1wVpAX1mm4BMSd2G66HulVh5J87W6eo5ATz0~ZDvI0FJeyuUoUBiHUofR~RuDMWTSYSby6jFyyffy42F4dexnpImpsWqK3qmvk6-DHDgqKsaQ7A-oL1IIq51ubUc9VmFeeLAcqQNJrVeDS8Y1MlgaSAgWyAc4PRjmPArCDb8oSTvhle3H7Q0GNUIHEq9A58HM18yyvGqb2HzY3h1QZbw6Tsoch7-fRQ9xWLoAfQ__',
    price: '250000',
    category: 'Cây trồng',
    type: 'Ưa sáng',
    remaining: '10sp',
  },
  {
    id: '3',
    name: 'Pink Anthurium',
    image:
      'https://s3-alpha-sig.figma.com/img/79db/7216/eefbefecedce13e3099111346323ae5a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bWZzUilu7UMrsUGvXIDFFwcmXqk2VOExFfH9VLmPMJ4R5c0RtuwVn~Buz~t~Q5GKvKqWVRI8gqbdtjh-NYjY6Hp4pmiEpmd9WfR~eAQoJFxYR9abN3iWFeTk~aCMoienW2jp4meRkBKwTny1IRyhaUzl5JKIEb8REfKkXDF~BXSe1~Oiv0Q7Ul7h0JIkBXvQgXKJw5i~gJROyqh2db5gVTN2RnZwWFYN4bPjKwpFoUkWmpWOunrymPAVJO3mNM~HVK8x~ulmaIeKdNjcbn52eLocfAFNBM7v1ov9iqZtpssj-A4D9Nrbb0rdnTOjavW9uqDIxic7FFMQHd7H6OU16A__',
    price: '250000',
    category: 'Cây trồng',
    type: 'Ưa bóng',
    remaining: '10sp',
  },
  {
    id: '4',
    name: 'Black Love Anthurium ',
    image:
      'https://s3-alpha-sig.figma.com/img/9535/a104/47ad12d663100e872d9e3244b91407a8?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ya5k34boxZxTuvHCs7GtxeVHFHOjKl~LVBhbaUS-nO8DUf7lDydO8AtR3vxpd~19yZ0jBCZ4oXqu7EWXUE9xr2dcev13ZuXd9TkiE~lMYZvk7iL7qXPwy7J-XfDhQZ0FN2Kb~1FN5aw07pbeMiriBwHAZpwnggXNug9T5HAMFeYDN7kX8qHQU74-u6V7yMkxy11aG~Z-CG7acW0VoJoicfidzo0slVHRPNzJeZGuHpez1L0o1pfLoSUbuiA7-zHeM~eIHfqi-qOXjTA9fnxDQhUPRsTBIaes49kYc4-pDnUi2VBNftUzt4onIeGrmsxJJdS~9b9eWgbItFwPE4TDfw__',
    price: '250000',
    category: 'Cây trồng',
    type: 'Ưa sáng',
    remaining: '10sp',
  },
  {
    id: '5',
    name: 'Grey Star Calarthea',
    image:
      'https://s3-alpha-sig.figma.com/img/c09f/33fd/b43f93e237e85807ef2954921d8acda1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nNsmqqSGsWEVmb2FyG2O8Zo1XpcOx6ohaqEApRUIZWz2hOUT~ioQZAUrUn4K80v~Y3SNRzF1d19QGlmWT26Uz4FK5xetd3LJC4LZcSf1TS7VJL2Actjowe3e4KuIRN2lXLp8SP3tnoQr9BeQfXD5egM-go0PFfNsUpXwrVAgb0AK5rgq1wzT9ftpcg-kcWCHbzn1~PGa4Q9p5Kar~khDkImX5u0KrX7hTqHaeYeoMwwXOE-vOrOEztzERQzuNStxYZW9w~g2rAEIF0NPwnUozcS47z~2buWSwZ09p0Maa69zDDhYfRg4LtIuRnheWcmgUa5AhrUzYjQhtAU2U5J0hQ__',
    price: '250000',
    category: 'Cây trồng',
    type: 'Ưa bóng',
    remaining: '10sp',
  },
];
export default caytrongData;