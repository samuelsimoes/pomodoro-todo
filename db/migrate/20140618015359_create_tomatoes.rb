class CreateTomatoes < ActiveRecord::Migration
  def change
    create_table :tomatoes do |t|
      t.integer :order, null: false
      t.string :description, null: false
      t.datetime :started_at
      t.datetime :finished_at

      t.timestamps
    end
  end
end
