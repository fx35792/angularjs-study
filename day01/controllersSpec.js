describe('PhoneCat controller',function(){
	describe('PhoneListCtrl',function(){
		it('should create "phones" model with 3 phones',function(){
			var scope = {},
			ctrl = new PhoneListCtrl(scope);
			expect(scope.phones.lenght).toBe(3);
		});
	});
});