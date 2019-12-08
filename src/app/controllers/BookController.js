// import * as Yup from 'yup';
import { Op, fn, col, where } from 'sequelize';
import { parseISO, startOfYear, endOfYear } from 'date-fns';

import Book from '../models/Book';

class BookController {
  async store(req, res) {
    try {
      const book = await Book.create(req.body);

      return res.json(book);
    } catch (error) {
      return res.status(400).json();
    }
  }

  async index(req, res) {
    const { filter, page, pageSize, dateFrom, dateTo } = req.query;
    try {
      const offset = Number(page) * Number(pageSize);
      const limit = Number(pageSize);

      const clausWhere = {};

      if (filter)
        clausWhere[Op.or] = [
          where(fn('lower', col('title')), { [Op.like]: `%${filter}%` }),
          where(fn('lower', col('author')), { [Op.like]: `%${filter}%` }),
          where(fn('lower', col('isbn')), { [Op.like]: `%${filter}%` }),
        ];

      if (dateFrom && dateTo)
        clausWhere.year = {
          [Op.between]: [
            startOfYear(parseISO(`${dateFrom}-01-01`)),
            endOfYear(parseISO(`${dateTo}-12-31`)),
          ],
        };

      const total = await Book.count({ where: clausWhere });

      const books = await Book.findAll({
        offset,
        limit,
        where: clausWhere,
      });

      return res.json({ books, total, page });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: 'There is no id' });

    try {
      const book = await Book.findByPk(id);

      return res.json(book);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default new BookController();
