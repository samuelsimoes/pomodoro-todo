class AddPomodoroListIdInTomatoes < ActiveRecord::Migration
  def change
    change_table :tomatoes do |t|
      t.integer :pomodoro_list_id, index: true, null: false
    end
  end
end
