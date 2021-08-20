/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('progress', {
    id: 'id',
    name: { type: 'varchar(1000)', notNull: true },
    description: {type: 'varchar(1000)', notNull: true},
    type: {type: 'varchar(10)', notNull: true},
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updatedAt: {
      type: 'timestamp',
      notNull: false,
    }
  })
}

exports.down = pgm => {};
