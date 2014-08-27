module PomodoroListsSteps
  step 'I click in "add new list"' do
    click_on 'Nova lista'
  end

  step 'I create a new pomodoro list' do
    expect(page).to have_css('.pomodoro-list-link', count: 3)

    within '.pomodoro-lists' do
      field = find('input[type=text]').native

      field.send_keys('My new list')

      find('input').native.send_key(:Enter)

      expect(page).to have_content('My new list')
    end
  end

  step 'I click in "delete" button' do
    field = find('.pomodoro-list-link:nth-child(2)')

    field.hover

    within '.pomodoro-list-link:nth-child(2)' do
      click_on 'Excluir'
    end
  end

  step 'the pomodoro list is deleted' do
    within '.pomodoro-lists' do
      expect(page).to_not have_content('My tasks')
    end
  end

  step 'I click in "edit" button' do
    field = find('.pomodoro-list-link:nth-child(2)')

    field.hover

    within '.pomodoro-list-link:nth-child(2)' do
      click_on 'Editar'

      field = find('input[type=text]').native

      field.send_keys(' edited')

      field.send_key(:Enter)
    end
  end

  step 'the pomodoro list is edited' do
    within '.pomodoro-lists' do
      expect(page).to have_content('My tasks edited')
    end
  end
end

RSpec.configure { |c| c.include PomodoroListsSteps }
