module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'books',
      [
        {
          title: 'Poder e Alta Performance',
          isbn: '0004700296649',
          author: 'Vieira,Paulo',
          publishing_company: 'Goe',
          year: '2017-02-01T10:00:00-03:00',
          language: 'Mandari',
          weight: 122,
          dimension: '12x12x12',
          img_url:
            'http://lojasaraiva.vteximg.com.br/arquivos/ids/8240953/1006628763.jpg?v=637099740084230000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Foco na Prática',
          isbn: '0007918960460',
          author: 'Vieira,Paulo',
          publishing_company: 'Goe',
          year: '2012-02-01T10:00:00-03:00',
          language: 'Portunhol',
          weight: 21,
          dimension: '12x122x12',
          img_url:
            'http://lojasaraiva.vteximg.com.br/arquivos/ids/7011711/684588.jpg?v=637075602115800000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title:
            'O Poder do Hábito - Por Que Fazemos o Que Fazemos na Vida e Nos Negócios',
          isbn: '0002709813026',
          author: 'Charles Duhigg',
          publishing_company: 'Edi tora',
          year: '2015-02-01T10:00:00-03:00',
          language: 'Português',
          weight: 222,
          dimension: '112x12x12',
          img_url:
            'http://lojasaraiva.vteximg.com.br/arquivos/ids/9202198/1008971706.jpg?v=637103760932530000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Harry Potter e A Pedra Filosofal - Edição Ilustrada',
          isbn: '0009022706813',
          author: 'Rowling,J. K.',
          publishing_company: 'Oka Ie',
          year: '2003-02-01T10:00:00-03:00',
          language: 'Português',
          weight: 222,
          dimension: '112x12x12',
          img_url:
            'http://lojasaraiva.vteximg.com.br/arquivos/ids/6987441/756811.jpg?v=637075442065570000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Harry Potter e o Prisioneiro De Azkaban - Ilustrado',
          isbn: '0027068090213',
          author: 'Rowling,J. K.',
          publishing_company: 'Oka Ie',
          year: '2008-02-01T10:00:00-03:00',
          language: 'Português',
          weight: 222,
          dimension: '112x12x12',
          img_url:
            'http://lojasaraiva.vteximg.com.br/arquivos/ids/8242423/1007739209.jpg?v=637099764384900000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Harry Potter e O Prisioneiro De Azkaban 3 - Capa Dura',
          isbn: '8090002706213',
          author: 'Rowling,J. K.',
          publishing_company: 'Oka Ie',
          year: '2006-02-01T10:00:00-03:00',
          language: 'Português',
          weight: 142,
          dimension: '212x12x12',
          img_url:
            'http://lojasaraiva.vteximg.com.br/arquivos/ids/6974439/781666.jpg?v=637075287179530000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Como Fazer Amigos e Influenciar Pessoas',
          isbn: '7080900026213',
          author: 'Carnegie, Dale',
          publishing_company: 'Editora nacional',
          year: '20012-02-01T10:00:00-03:00',
          language: 'Português',
          weight: 142,
          dimension: '212x12x12',
          img_url:
            'http://lojasaraiva.vteximg.com.br/arquivos/ids/9200660/1008160494.jpg?v=637103751277870000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Harry Potter e O Cálice De Fogo 4 - Capa Dura',
          isbn: '0027080906213',
          author: 'Rowling,J. K.',
          publishing_company: 'Oka Edi nacional',
          year: '1998-02-01T10:00:00-03:00',
          language: 'Português',
          weight: 142,
          dimension: '212x12x12',
          img_url:
            'http://lojasaraiva.vteximg.com.br/arquivos/ids/8240954/1008927406.jpg?v=637099740101430000',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('books', null, {});
  },
};
