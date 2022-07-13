require 'test_helper'

class Api::ChannelControllerTest < ActionDispatch::IntegrationTest
  test "should get Messages" do
    get api_channel_Messages_url
    assert_response :success
  end

end
