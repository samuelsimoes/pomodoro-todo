class CreatePomodoroLists < ActiveRecord::Migration
  def change
    create_table :pomodoro_lists do |t|
      t.string :title, null: false

      t.timestamps
    end
  end
end
