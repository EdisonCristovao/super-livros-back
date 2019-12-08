'use strict';

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
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('books', null, {});
  },
};
