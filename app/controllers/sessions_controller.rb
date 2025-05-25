class SessionsController < Clearance::SessionsController
  def new
    render inertia: "Auth/SignIn"
  end

  def create
    @user = authenticate(user_params)

    sign_in(@user) do |status|
      if status.success?
        redirect_to dashboard_path
      else
        render inertia: "Auth/SignIn", props: { errors: { base: status.failure_message } }
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
