class AddPomodoroListIdInTomatoes < ActiveRecord::Migration
  def change
    add_column :tomatoes, :pomodoro_list_id, :integer
  end
end
