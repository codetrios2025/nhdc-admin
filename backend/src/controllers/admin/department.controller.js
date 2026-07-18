const { validationResult } = require("express-validator");

const DepartmentService = require("../../services/admin/department.service");

const ApiResponse = require("../../utils/ApiResponse");

class DepartmentController {
  /*
  |--------------------------------------------------------------------------
  | Create Department
  |--------------------------------------------------------------------------
  */

  async create(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return ApiResponse.validationError(res, errors.array());
      }

      const department = await DepartmentService.create({
        ...req.body,
        createdBy: req.user?._id || null,
      });

      return ApiResponse.success(
        res,
        department,
        "Department created successfully.",
      );
    } catch (error) {
      next(error);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Department List
  |--------------------------------------------------------------------------
  */

  async getAll(req, res, next) {
    try {
      const departments = await DepartmentService.getAll(req.query);

      return ApiResponse.success(
        res,
        departments,
        "Department list fetched successfully.",
      );
    } catch (error) {
      next(error);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Department Details
  |--------------------------------------------------------------------------
  */

  async getById(req, res, next) {
    try {
      const department = await DepartmentService.getById(req.params.id);

      return ApiResponse.success(
        res,
        department,
        "Department details fetched successfully.",
      );
    } catch (error) {
      next(error);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Department By Slug (Website)
  |--------------------------------------------------------------------------
  */

  async getBySlug(req, res, next) {
    try {
      const department = await DepartmentService.getBySlug(req.params.slug);

      return ApiResponse.success(
        res,
        department,
        "Department fetched successfully.",
      );
    } catch (error) {
      next(error);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Update Department
  |--------------------------------------------------------------------------
  */

  async update(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return ApiResponse.validationError(res, errors.array());
      }

      const department = await DepartmentService.update(req.params.id, {
        ...req.body,
        updatedBy: req.user?._id || null,
      });

      return ApiResponse.success(
        res,
        department,
        "Department updated successfully.",
      );
    } catch (error) {
      next(error);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Delete Department
  |--------------------------------------------------------------------------
  */

  async delete(req, res, next) {
    try {
      await DepartmentService.delete(req.params.id);

      return ApiResponse.success(res, null, "Department deleted successfully.");
    } catch (error) {
      next(error);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Active Departments (Website)
  |--------------------------------------------------------------------------
  */

  async getActive(req, res, next) {
    try {
      const departments = await DepartmentService.getActiveDepartments();

      return ApiResponse.success(
        res,
        departments,
        "Active departments fetched successfully.",
      );
    } catch (error) {
      next(error);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Dropdown
  |--------------------------------------------------------------------------
  */

  async dropdown(req, res, next) {
    try {
      const departments = await DepartmentService.getDropdown();

      return ApiResponse.success(
        res,
        departments,
        "Department dropdown fetched successfully.",
      );
    } catch (error) {
      next(error);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Statistics
  |--------------------------------------------------------------------------
  */

  async statistics(req, res, next) {
    try {
      const statistics = await DepartmentService.getStatistics();

      return ApiResponse.success(
        res,
        statistics,
        "Department statistics fetched successfully.",
      );
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DepartmentController();
