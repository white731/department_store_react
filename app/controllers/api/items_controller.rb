class Api::ItemsController < ApplicationController

  before_action :set_department
  
  def index
    department = Department.find(params[:department_id])
    render json: department.items.all
  end

  def show
    item = @department.items.find(params[:id])
    render json: item
  end 

  def create
    item = @department.items.new(item_params)
    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def update
    item = @department.items.find(params[:id])
    if item.update(item_params)
      render json: item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    item = @department.items.find(params[:id]).destroy
    render json: item
  end

  private

  def set_department 
    @department = Department.find(params[:department_id])
  end

  def item_params
    params.require(:item).permit(:name, :price, :department_id)
  end

end
