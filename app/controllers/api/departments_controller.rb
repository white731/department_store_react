class Api::DepartmentsController < ApplicationController
    def index
      render json: Department.all
    end
  
    def show
      department = Department.find(params[:id])
      render json: department
    end 
  
    def create
      department = Department.new(department_params)
      if department.save
        render json: department
      else
        render json: { errors: item.errors }, status: :unprocessable_entity
      end
    end
  
    def update
      department = Department.find(params[:id])
      if department.update(department_params)
        render json: department
      else
        render json: { errors: item.errors }, status: :unprocessable_entity
      end
  
    end
  
    def destroy
      department = Department.find(params[:id]).destroy
      render json: department
    end

    def sort_by_name
      
      department = Department.find(params[:department_id])
      items = Item.sort_by_name(department.id)
      render json: items
    end

    def sort_by_price
      
      department = Department.find(params[:department_id])
      items = Item.sort_by_price(department.id)
      render json: items
    end
  
    private
  
    def department_params
      params.require(:department).permit(:name)
    end
  end
  

