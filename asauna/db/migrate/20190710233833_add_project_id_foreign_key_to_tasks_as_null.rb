class AddProjectIdForeignKeyToTasksAsNull < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :project_id, :integer
  end
end
