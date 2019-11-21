class Api::MoneyController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :index]

  def index
    @items = Money.all

    # render json: Money.all, status: 200
    # puts params
  end
  def create
    # puts "="*30
    # puts params
    # puts "="*30
    @money = Money.new(money_params)

    if @money.save
      render JSON status {"good"}
    else
      render JSON status {"bad"}
    end
    
  end

  private
  def money_params
    params.require(:money).permit(:expand_type, :title, :amount, :description)
  end
end
