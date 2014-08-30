class ChangeTomatoesTableName < ActiveRecord::Migration
  def change
    rename_table :tomatoes, :pomodoros
  end
end
