class CreateMoney < ActiveRecord::Migration[6.0]
  def change
    create_table :money do |t|
      t.string :expand_type
      t.string :title
      t.integer :amount
      t.text :description

      t.timestamps
    end
  end
end
