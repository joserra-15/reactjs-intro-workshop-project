const e = React.createElement;

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, img, body } = this.props.post;

    return e(
      'div',
      { key: `${title}div`, className: 'cards-container__item' },
      [
        e(
          'div',
          { className: 'conatiner-img', key: `${title}divimg` },
          e('img', { src: img, className: 'img', key: `${title}img` }),
        ),
        e('h2', { key: `${title}h2` }, title),
        e('p', { key: `${title}body` }, body),
        e(
          'button',
          {
            key: `${title}button`,
            onClick: () => {
              alert('loading...');
            },
          },
          'Read more',
        ),
      ],
    );
  }
}

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { postList } = this.props;
    const fragment = postList.map((post, index) =>
      e(Card, {
        key: index,
        post,
      }),
    );

    return e('div', { className: 'cards-container' }, fragment);
  }
}

const postList = [
  {
    title: 'scathcer',
    img: './assets/demo1.png',
    body:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum veniam molestias, voluptatibus nisi aliquid! ',
  },
  {
    title: 'cabalistically',
    img: './assets/demo2.jpg',
    body:
      'Sed pariatur ullam commodi blanditiis placeat, iusto esse numquam alias explicabo mollitia perspiciatis, dolores magni!',
  },
  {
    title: 'jorganium',
    img: './assets/demo3.jpg',
    body:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum veniam molestias, voluptatibus nisi aliquid! Sed pariatur ullam commodi blanditiis placeat, iusto esse numquam alias explicabo mollitia perspiciatis, dolores magni!',
  },
];

ReactDOM.render(e(CardList, { postList }), document.getElementById('root'));
