class Api::MoneyController < ApplicationController
  def create
    @money = Money.new(money_params)
  end

  private
  def money_params
    params.require(:money).permit(:expand_type, :title, :amount, :description)
  end
end
