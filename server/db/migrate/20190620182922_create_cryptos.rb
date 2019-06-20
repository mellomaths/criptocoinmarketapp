class CreateCryptos < ActiveRecord::Migration[5.1]
  def change
    create_table :cryptos do |t|
      t.string :name
      t.string :symbol
      t.integer :position
      t.float :price
      t.float :market_cap

      t.timestamps
    end
  end
end
