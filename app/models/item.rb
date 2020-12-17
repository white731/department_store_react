class Item < ApplicationRecord
  belongs_to :department

  def self.sort_by_name(id)
    self.find_by_sql("Select * from items
    where department_id = #{id}
    order by name")
  end

  def self.sort_by_price(id)
    self.find_by_sql("Select * from items
    where department_id = #{id}
    order by price")
  end

end
