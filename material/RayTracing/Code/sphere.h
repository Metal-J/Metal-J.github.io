#pragma once
#include "hittable.h"

class sphere : public hittable {

	public:
		point3 center;
		double radius;
		shared_ptr<material> mat_ptr;

	public:
		sphere() {}
		sphere(point3 cen, double r, shared_ptr<material> m)
			: center(cen), radius(r), mat_ptr(m) {};

		virtual bool hit(const ray& r, double t_min, double t_max, hit_point& h_point) const override;

};

bool sphere::hit (const ray& r, double t_min, double t_max, hit_point& h_point) const {

	vec3 oc = r.origin() - center;
	auto a = r.direction().length_squared();
	auto half_b = dot(oc, r.direction());
	auto c = oc.length_squared() - radius * radius;

	auto discriminant = half_b * half_b - a * c;
	if (discriminant < 0) return false;
	auto sqrtd = sqrt(discriminant);
	auto root = (-half_b - sqrtd) / a;

	// Find the nearest root that lies in the acceptable range.
	
	if (root < t_min || t_max < root) {
		root = (-half_b + sqrtd) / a;
		if (root < t_min || t_max < root)
			return false;
	}

	h_point.root = root;
	h_point.p = r.at(h_point.root);
	vec3 outward_normal = (h_point.p - center) / radius;
	h_point.set_face_normal(r, outward_normal);
	h_point.mat_ptr = mat_ptr;

	return true;

}